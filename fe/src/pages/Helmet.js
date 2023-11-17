/** @format */

import React, { useState } from 'react';
import MainLayout from '../layout/MainLayout';
import { motion } from 'framer-motion';
import { Col, Container, Row } from 'react-bootstrap';
import { nanoid } from 'nanoid';
import {
  useGetHelmetQuery,
  useGetHelmetByTitleQuery,
  useAddHelmetMutation,
} from '../api/apiSlice';
import SingleHelmet from '../components/helmet/SingleHelmet';
import ResponsivePagination from 'react-responsive-pagination';
import 'react-responsive-pagination/themes/classic.css';
import { useSession } from '../hooks/AuthSession';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import '../components/style/helmet.css';

const Helmet = () => {
  const session = useSession();
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState('');
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState({});
  const [imgFilesData, setImgFilesData] = useState({
    img: null,
    image2: null,
    image3: null,
    image4: null,
    image5: null,
  });

  console.log(imgFilesData);
  console.log(formData);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [addHelmet, { ilLoading }] = useAddHelmetMutation();

  const handleInputChange = e => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (event, key) => {
    const file = event.target.files[0]; // Assumendo che stai permettendo la selezione di un solo file

    // Aggiorna lo stato con il nuovo file selezionato
    setImgFilesData(prevState => ({
      ...prevState,
      [key]: file,
    }));
  };

  const uploadToCloudinary = async (img, image2, image3, image4, image5) => {
    const filesData = new FormData();
    console.log(filesData);
    filesData.append('img', imgFilesData.img);
    filesData.append('image2', imgFilesData.image2);
    filesData.append('image3', imgFilesData.image3);
    filesData.append('image4', imgFilesData.image4);
    filesData.append('image5', imgFilesData.image5);

    try {
      const response = await fetch(
        `${process.env.REACT_APP_SERVER_URL}/helmets/cloudUpload`,
        {
          method: 'POST',
          body: filesData,
        }
      );
      if (response.status === 200) {
        return response.json();
      } else {
        throw new Error('Errore nella chiamata post del file con cloudinary');
      }
    } catch (error) {
      console.error('Errore durante il caricamento su Cloudinary:', error);
    }
  };

  const sendPost = async e => {
    e.preventDefault();
    if (Object.values(imgFilesData).every(file => file !== null)) {
      try {
        const uploadImages = await uploadToCloudinary();
        const finalBody = {
          ...formData,
          img: uploadImages.img,
          image2: uploadImages.image2,
          image3: uploadImages.image3,
          image4: uploadImages.image4,
          image5: uploadImages.image5,
        };
        await addHelmet(finalBody);
        setFormData({});
        setImgFilesData({
          img: null,
          image2: null,
          image3: null,
          image4: null,
          image5: null,
        });
        setTimeout(() => {
          handleClose();
        }, 1000);
      } catch (error) {
        console.log("errore nell'invio del post", error);
      }
    } else {
      console.log(
        'Alcuni file sono mancanti. Assicurati di caricare tutti i file richiesti.'
      );
    }
  };

  const handlePageChange = value => {
    setCurrentPage(value);
  };

  const {
    data: helmetsByTitle = [],
    isLoading: isSearchLoading,
    isSuccess: isSearchSuccess,
    isError: isSearchError,
  } = useGetHelmetByTitleQuery(search);

  const {
    data: helmets = [],
    isLoading: isPostLoading,
    isSuccess: isPostSuccess,
    isError: IsPostError,
  } = useGetHelmetQuery(currentPage);

  const helmetsToDisplay = search
    ? helmetsByTitle?.helmet
    : helmets?.helmet || [];

  return (
    <div className=''>
      <MainLayout>
        <motion.div
          initial={{ width: 0, y: 100 }}
          animate={{ width: '100%', y: 0 }}
          exit={{ width: 0, y: 100 }}>
          <div className='sfondo-helmet content'>
            <h1 className='h1-new'>
              <span class='right'>Helmet</span>
            </h1>
          </div>
          <Container fluid>
            <div className='my-4 d-flex justify-content-end'>
              <input
                type='text'
                placeholder='Search by title'
                value={search}
                onChange={e => setSearch(e.target.value)}
              />
            </div>

            <div>
              {session.role === 'admin' ? (
                <>
                  <Button
                    variant='primary'
                    className='my-3'
                    onClick={handleShow}>
                    Launch demo modal
                  </Button>

                  <Modal
                    show={show}
                    onHide={handleClose}>
                    <Modal.Header closeButton>
                      <Modal.Title>Armor Build Post</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <Form
                        encType='multipart/form-data'
                        onSubmit={sendPost}>
                        <Form.Group
                          className='mb-3'
                          controlId='exampleForm.ControlInput1'>
                          <Form.Label>Img</Form.Label>
                          <Form.Control
                            type='file'
                            required
                            name='img'
                            onChange={e => handleFileChange(e, 'img')}
                            autoFocus
                          />
                        </Form.Group>
                        <Form.Group
                          className='mb-3'
                          controlId='exampleForm.ControlInput1'>
                          <Form.Label>Image2</Form.Label>
                          <Form.Control
                            type='file'
                            name='image2'
                            onChange={e => handleFileChange(e, 'image2')}
                            required
                            autoFocus
                          />
                        </Form.Group>
                        <Form.Group
                          className='mb-3'
                          controlId='exampleForm.ControlInput1'>
                          <Form.Label>Image3</Form.Label>
                          <Form.Control
                            type='file'
                            required
                            onChange={e => handleFileChange(e, 'image3')}
                            name='image3'
                            autoFocus
                          />
                        </Form.Group>
                        <Form.Group
                          className='mb-3'
                          controlId='exampleForm.ControlInput1'>
                          <Form.Label>Image4</Form.Label>
                          <Form.Control
                            type='file'
                            required
                            onChange={e => handleFileChange(e, 'image4')}
                            name='image4'
                            autoFocus
                          />
                        </Form.Group>
                        <Form.Group
                          className='mb-3'
                          controlId='exampleForm.ControlInput1'>
                          <Form.Label>Image5</Form.Label>
                          <Form.Control
                            type='file'
                            required
                            onChange={e => handleFileChange(e, 'image5')}
                            name='image5'
                            autoFocus
                          />
                        </Form.Group>
                        <Form.Group
                          className='mb-3'
                          controlId='exampleForm.ControlInput1'>
                          <Form.Label>Description</Form.Label>
                          <Form.Control
                            type='text'
                            name='description'
                            placeholder='description'
                            autoFocus
                            onChange={handleInputChange}
                            required
                          />
                        </Form.Group>
                        <Form.Group
                          className='mb-3'
                          controlId='exampleForm.ControlInput1'>
                          <Form.Label>Price</Form.Label>
                          <Form.Control
                            type='number'
                            name='price'
                            placeholder='price'
                            onChange={handleInputChange}
                            autoFocus
                            required
                          />
                        </Form.Group>
                        <Form.Group
                          className='mb-3'
                          controlId='exampleForm.ControlInput1'>
                          <Form.Label>Title</Form.Label>
                          <Form.Control
                            type='text'
                            name='title'
                            placeholder='title'
                            autoFocus
                            onChange={handleInputChange}
                            required
                          />
                        </Form.Group>
                        <Form.Group
                          className='mb-3'
                          controlId='exampleForm.ControlInput1'>
                          <Form.Label>height</Form.Label>
                          <Form.Control
                            type='number'
                            placeholder='height'
                            name='height'
                            autoFocus
                            onChange={handleInputChange}
                            required
                          />
                        </Form.Group>
                        <Form.Group
                          className='mb-3'
                          controlId='exampleForm.ControlInput1'>
                          <Form.Label>weight</Form.Label>
                          <Form.Control
                            type='number'
                            name='weight'
                            placeholder='weight'
                            autoFocus
                            onChange={handleInputChange}
                            required
                          />
                        </Form.Group>
                        <Form.Group
                          className='mb-3'
                          controlId='exampleForm.ControlInput1'>
                          <Form.Label>subtitle</Form.Label>
                          <Form.Control
                            type='text'
                            name='subtitle'
                            onChange={handleInputChange}
                            placeholder='subtitle'
                            autoFocus
                          />
                        </Form.Group>

                        <Button
                          type='submit'
                          variant='secondary'>
                          Close
                        </Button>
                      </Form>
                    </Modal.Body>
                    <Modal.Footer>
                      <Button
                        variant='secondary'
                        onClick={handleClose}>
                        Close
                      </Button>
                      <Button
                        variant='primary'
                        onClick={handleClose}>
                        Save Changes
                      </Button>
                    </Modal.Footer>
                  </Modal>
                </>
              ) : null}
            </div>
            <Row>
              <Col className='d-flex justify-content-between flex-wrap gap-3'>
                {search && isSearchSuccess ? (
                  helmetsToDisplay.map(item => (
                    <SingleHelmet
                      key={nanoid()}
                      title={item.title}
                      price={item.price}
                      category={item.category}
                      img={item.img}
                      subtitle={item.subtitle}
                      id={item._id}
                    />
                  ))
                ) : isPostSuccess ? (
                  helmets?.helmet?.map(item => (
                    <SingleHelmet
                      key={nanoid()}
                      title={item.title}
                      price={item.price}
                      category={item.category}
                      img={item.img}
                      subtitle={item.subtitle}
                      id={item._id}
                    />
                  ))
                ) : IsPostError ? (
                  <p>Error fetching data</p>
                ) : isSearchError ? (
                  <p>Error fetching search results</p>
                ) : (
                  <p>Loading...</p>
                )}
              </Col>
            </Row>
          </Container>

          <ResponsivePagination
            extraClassName='my-5 justify-content-center'
            current={currentPage}
            total={helmets && helmets.totalPages}
            onPageChange={handlePageChange}
          />
        </motion.div>
      </MainLayout>
    </div>
  );
};

export default Helmet;
