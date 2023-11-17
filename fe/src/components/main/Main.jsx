/** @format */

import React, { useState } from 'react';
import './main.css';
import {
  useAddPostsMutation,
  useGetPostsQuery,
  useDeletePostsMutation,
} from '../../api/apiSlice';
import { useMutation } from '@reduxjs/toolkit/query/react';
import Article from '../article/Article';
import { nanoid } from 'nanoid';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { useSession } from '../../hooks/AuthSession';

const Main = () => {
  const session = useSession();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [postData, setPostData] = useState({});

  console.log(postData);

  const handleInputChange = e => {
    const { name, value } = e.target;

    setPostData({
      ...postData,
      [name]: value,
    });
  };

  const [addPosts, { isLoading }] = useAddPostsMutation();

  const [deletePosts] = useDeletePostsMutation();

  const handleOnSubmit = async e => {
    e.preventDefault();

    try {
      await addPosts(postData);

      setPostData({});
      handleClose();
    } catch (error) {
      console.error("Errore durante l'aggiunta del post:", error);
    }
  };

  let reverse = false;

  const {
    data: posts,
    isLoading: isPostLoading,
    isSuccess: isPostSuccess,
    isError: IsPostError,
  } = useGetPostsQuery();

  return (
    <div>
      <div className='main-back'>
        <h1>The story of Katana</h1>
      </div>

      {session?.role === 'admin' ? (
        <>
          <Button
            variant='primary'
            onClick={handleShow}>
            Launch demo modal
          </Button>

          <Modal
            show={show}
            onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form onSubmit={handleOnSubmit}>
                <Form.Group
                  className='mb-3'
                  controlId='exampleForm.ControlInput1'>
                  <Form.Label>Title</Form.Label>
                  <Form.Control
                    type='text'
                    name='title'
                    onChange={handleInputChange}
                    placeholder='title'
                    disabled={isLoading}
                    autoFocus
                  />
                </Form.Group>
                <Form.Group
                  className='mb-3'
                  controlId='exampleForm.ControlInput1'>
                  <Form.Label>Img</Form.Label>
                  <Form.Control
                    type='text'
                    onChange={handleInputChange}
                    name='img'
                    placeholder='Inserisci il file'
                    autoFocus
                    disabled={isLoading}
                  />
                </Form.Group>
                <Form.Group
                  className='mb-3'
                  controlId='exampleForm.ControlInput1'>
                  <Form.Label>description</Form.Label>
                  <Form.Control
                    type='text'
                    name='description'
                    onChange={handleInputChange}
                    placeholder='description'
                    autoFocus
                    disabled={isLoading}
                  />
                </Form.Group>
                <Form.Group
                  className='mb-3'
                  controlId='exampleForm.ControlInput1'>
                  <Form.Label>Source</Form.Label>
                  <Form.Control
                    type='text'
                    name='source'
                    onChange={handleInputChange}
                    placeholder='source'
                    autoFocus
                    disabled={isLoading}
                  />
                </Form.Group>
                <Form.Group
                  className='mb-3'
                  controlId='exampleForm.ControlInput1'>
                  <Form.Label>Subtitle</Form.Label>
                  <Form.Control
                    type='text'
                    placeholder='subtitle'
                    name='subtitle'
                    onChange={handleInputChange}
                    autoFocus
                    disabled={isLoading}
                  />
                </Form.Group>
                <Button type='submit'>Invia Post</Button>
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

      {isPostSuccess && !isPostLoading ? (
        posts ? (
          posts.post?.map(element => {
            reverse = !reverse;
            return (
              <>
                <Article
                  key={element._id}
                  title={element.title}
                  subtitle={element.subtitle}
                  img={element.img}
                  description={element.description}
                  reverse={reverse}
                  source={element.source}
                />

                {session?.role === 'admin' ? (
                  <Button onClick={() => deletePosts(element._id)}>
                    Elimina Posts
                  </Button>
                ) : null}
              </>
            );
          })
        ) : (
          <p>...Loading</p>
        )
      ) : IsPostError ? (
        <p>Errore nella chiamata dei post</p>
      ) : null}
    </div>
  );
};

export default Main;
