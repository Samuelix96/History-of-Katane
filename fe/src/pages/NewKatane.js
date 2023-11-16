/** @format */

import { motion } from 'framer-motion';
import React, { useState } from 'react';
import MainLayout from '../layout/MainLayout';
import {
  useGetKataneQuery,
  useGetKataneByTitleQuery,
  useAddKataneMutation,
} from '../api/apiSlice';
import SingleNewKatana from '../components/katane/SingleNewKatana';
import { nanoid } from 'nanoid';
import { Col, Container, Row } from 'react-bootstrap';
import { useSession } from '../hooks/AuthSession';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import '../components/style/katananew.scss';

const NewKatane = () => {
  const session = useSession();
  const [searchTerm, setSearchTerm] = useState('');

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

  const [adNewKatane, { ilLoading }] = useAddKataneMutation();

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
        `${process.env.REACT_APP_SERVER_URL}/katanas/cloudUpload`,
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
        await adNewKatane(finalBody);
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

  const {
    data: kataByTitle = [],
    isLoading: isSearchLoading,
    isSuccess: isSearchSuccess,
    isError: isSearchError,
  } = useGetKataneByTitleQuery(searchTerm);

  const {
    data: newKata = [],
    isLoading: isPostLoading,
    isSuccess: isPostSuccess,
    isError: IsPostError,
  } = useGetKataneQuery('new');

  const katanasToDisplay = searchTerm
    ? kataByTitle?.katatitle
    : newKata?.katas || [];

  console.log('SOno le new ', newKata);

  return (
    <MainLayout>
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: '100%' }}
        exit={{ width: window.innerWidth, translate: { duration: 0.1 } }}>
        <div className='sfondo-new content'>
          <h1 className='h1-new'>
            <span class='left'>-New-</span>
            <span class='right'>Katana-</span>
          </h1>
        </div>

        <Container
          fluid
          className='my-5'>
          <div className='  my-4 d-flex justify-content-end'>
            <input
              type='text'
              placeholder='Search by title'
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
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
                        <Form.Label>Category</Form.Label>
                        <Form.Control
                          type='text'
                          placeholder='category'
                          name='category'
                          autoFocus
                          onChange={handleInputChange}
                          required
                        />
                      </Form.Group>
                      <Form.Group
                        className='mb-3'
                        controlId='exampleForm.ControlInput1'>
                        <Form.Label>width</Form.Label>
                        <Form.Control
                          type='number'
                          name='width'
                          placeholder='width'
                          autoFocus
                          onChange={handleInputChange}
                          required
                        />
                      </Form.Group>
                      <Form.Group
                        className='mb-3'
                        controlId='exampleForm.ControlInput1'>
                        <Form.Label>location</Form.Label>
                        <Form.Control
                          type='text'
                          name='location'
                          onChange={handleInputChange}
                          placeholder='location'
                          autoFocus
                        />
                      </Form.Group>
                      <Form.Group
                        className='mb-3'
                        controlId='exampleForm.ControlInput1'>
                        <Form.Label>Age</Form.Label>
                        <Form.Control
                          type='text'
                          name='age'
                          onChange={handleInputChange}
                          placeholder='age'
                          autoFocus
                        />
                      </Form.Group>
                      <Form.Group
                        className='mb-3'
                        controlId='exampleForm.ControlInput1'>
                        <Form.Label>thickness</Form.Label>
                        <Form.Control
                          type='number'
                          name='thickness'
                          onChange={handleInputChange}
                          placeholder='thickness'
                          autoFocus
                        />
                      </Form.Group>
                      <Form.Group
                        className='mb-3'
                        controlId='exampleForm.ControlInput1'>
                        <Form.Label>length</Form.Label>
                        <Form.Control
                          type='number'
                          name='length'
                          onChange={handleInputChange}
                          placeholder='length'
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
            <Col className='d-flex justify-content-between align-items-center gap-3 flex-wrap'>
              {searchTerm && isSearchSuccess ? (
                katanasToDisplay.map(item => (
                  <SingleNewKatana
                    key={nanoid()}
                    title={item.title}
                    price={item.price}
                    category={item.category}
                    description={item.description}
                    image2={item.image2}
                    img={item.img}
                    id={item._id}
                    location={item.location}
                    subtitle={item.subtitle}
                  />
                ))
              ) : isPostSuccess ? (
                newKata?.katas.map(item => (
                  <SingleNewKatana
                    key={nanoid()}
                    title={item.title}
                    price={item.price}
                    description={item.description}
                    category={item.category}
                    img={item.img}
                    image2={item.image2}
                    id={item._id}
                    location={item.location}
                    subtitle={item.subtitle}
                  />
                ))
              ) : IsPostError ? (
                <p>Error fetching category data</p>
              ) : isSearchError ? (
                <p>Error fetching search results</p>
              ) : (
                <p>Loading...</p>
              )}
            </Col>
          </Row>
        </Container>
      </motion.div>
    </MainLayout>
  );
};

export default NewKatane;
