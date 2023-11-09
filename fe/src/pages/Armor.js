import React from 'react'
import MainLayout from '../layout/MainLayout'
import { motion } from "framer-motion";
import { Col, Container, Row } from 'react-bootstrap';
import { useGetArmorQuery } from '../api/apiSlice';
import ArmorCard from '../components/armor/ArmorCard';
import { nanoid } from 'nanoid';
import "../components/style/armor.css"
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { useSession } from '../hooks/AuthSession';
import { useSelector } from 'react-redux';



const Armor = () =>
{

  const session = useSession()

  const {
    data: armors,
    isLoading: isPostLoading,
    isSuccess: isPostSuccess,
    isError: IsPostError,
  } = useGetArmorQuery();

  console.log("Armors", armors)

  const [ show, setShow ] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className=''>
      <MainLayout>
        <motion.div
          initial={ { width: 0 } }
          animate={ { width: "100%" } }
          exit={ { width: 0 } }

        >
          <h1 className='text-center '>Armor</h1>
          <Container fluid className='my-5 '>

            { session.role === "admin" ? (
              <>
              
            <Button variant="primary" className="my-3" onClick={ handleShow }>
              Launch demo modal
            </Button>

            <Modal show={ show } onHide={ handleClose }>
              <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="name@example.com"
                      autoFocus
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlTextarea1"
                  >
                    <Form.Label>Example textarea</Form.Label>
                    <Form.Control as="textarea" rows={ 3 } />
                  </Form.Group>
                </Form>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={ handleClose }>
                  Close
                </Button>
                <Button variant="primary" onClick={ handleClose }>
                  Save Changes
                </Button>
              </Modal.Footer>
            </Modal>
            </>
) : null}
            <Row>
              <Col className='d-flex justify-content-between flex-wrap gap-2'>
                { isPostSuccess && !isPostLoading ? (
                  armors ? (
                    armors.armor?.map((build) =>
                    {
                      return (
                        <ArmorCard
                          key={ nanoid() }
                          img={ build.img }
                          title={ build.title }
                          helmet={ build.helmet }
                          price={ build.price }
                          id={ build._id }
                        />
                      );
                    })
                  ) : (
                    <p>...Loading</p>
                  )
                ) : IsPostError ? (
                  <p>Error into call by category</p>
                ) : "nulla riprova" }
              </Col>
            </Row>
          </Container>

        </motion.div>
      </MainLayout>
    </div>

  )
}

export default Armor
