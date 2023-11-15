/** @format */

import React, { useState } from 'react';
import MainLayout from '../layout/MainLayout';
import { motion } from 'framer-motion';
import { Col, Container, Row } from 'react-bootstrap';
import {
  useGetArmorQuery,
  useGetArmorByTitleQuery,
  useAddArmorMutation,
} from '../api/apiSlice';
import ArmorCard from '../components/armor/ArmorCard';
import { nanoid } from 'nanoid';
import '../components/style/armor.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { useSession } from '../hooks/AuthSession';
import ResponsivePagination from 'react-responsive-pagination';
import 'react-responsive-pagination/themes/classic.css';

const Armor = () => {
  const session = useSession();
  const [show, setShow] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [formData, setFormData] = useState({});
  const [imgFiles, setImgFiles] = useState({
    img: null,
    image2: null,
    image3: null,
    image4: null,
    image5: null,
  });

  console.log(imgFiles);
  console.log(formData);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [addPost, { isLoading }] = useAddArmorMutation();

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
    setImgFiles(prevState => ({
      ...prevState,
      [key]: file,
    }));
  };

  const uploadToCloudinary = async (img, image2, image3, image4, image5) => {
    const filesData = new FormData();
    console.log(filesData);
    filesData.append('img', imgFiles.img);
    filesData.append('image2', imgFiles.image2);
    filesData.append('image3', imgFiles.image3);
    filesData.append('image4', imgFiles.image4);
    filesData.append('image5', imgFiles.image5);

    try {
      const response = await fetch(
        `${process.env.REACT_APP_SERVER_URL}/armors/cloudUpload`,
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
    if (Object.values(imgFiles).every(file => file !== null)) {
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
        await addPost(finalBody);
        setFormData({});
        setImgFiles({
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
    data: armorByTitle = [],
    isLoading: isSearchLoading,
    isSuccess: isSearchSuccess,
    isError: isSearchError,
  } = useGetArmorByTitleQuery(searchTerm);

  const {
    data: armors = [],
    isLoading: isPostLoading,
    isSuccess: isPostSuccess,
    isError: IsPostError,
  } = useGetArmorQuery(currentPage);

  const armorToDisplay = searchTerm ? armorByTitle?.armor : armors?.armor || [];

  return (
    <div className=''>
      <MainLayout>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: '100%' }}
          exit={{ width: 0 }}>
          <div className='sfondo-armor content'>
            <h1 className='h1-new'>
              <span class='right'>Armor</span>
            </h1>
          </div>

          <Container
            fluid
            className='my-5 '>
            <div className='my-4 d-flex justify-content-end'>
              <input
                type='text'
                placeholder='Search by title'
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
              />
            </div>

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
                        <Form.Label>Helmet</Form.Label>
                        <Form.Control
                          type='text'
                          placeholder='helmet'
                          name='helmet'
                          autoFocus
                          onChange={handleInputChange}
                          required
                        />
                      </Form.Group>
                      <Form.Group
                        className='mb-3'
                        controlId='exampleForm.ControlInput1'>
                        <Form.Label>Mask</Form.Label>
                        <Form.Control
                          type='email'
                          name='mask'
                          placeholder='Mask'
                          autoFocus
                          onChange={handleInputChange}
                          required
                        />
                      </Form.Group>
                      <Form.Group
                        className='mb-3'
                        controlId='exampleForm.ControlInput1'>
                        <Form.Label>Armor</Form.Label>
                        <Form.Control
                          type='text'
                          name='armor'
                          onChange={handleInputChange}
                          placeholder='Armor'
                          autoFocus
                        />
                      </Form.Group>
                      <Form.Group
                        className='mb-3'
                        controlId='exampleForm.ControlInput1'>
                        <Form.Label>sleeves</Form.Label>
                        <Form.Control
                          type='text'
                          name='sleeves'
                          placeholder='sleeves'
                          autoFocus
                          onChange={handleInputChange}
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
            <Row>
              <Col className='d-flex justify-content-between flex-wrap gap-2'>
                {searchTerm && isSearchSuccess ? (
                  armorToDisplay?.map(item => (
                    <ArmorCard
                      key={nanoid()}
                      title={item.title}
                      price={item.price}
                      category={item.category}
                      img={item.img}
                      id={item._id}
                    />
                  ))
                ) : isPostSuccess ? (
                  armors?.armor.map(item => (
                    <ArmorCard
                      key={nanoid()}
                      title={item.title}
                      price={item.price}
                      category={item.category}
                      img={item.img}
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
            current={currentPage}
            total={armors && armors.totalPages}
            onPageChange={handlePageChange}
          />
        </motion.div>
      </MainLayout>
    </div>
  );
};

export default Armor;
