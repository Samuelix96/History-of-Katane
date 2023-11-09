import React from 'react'
import { motion } from "framer-motion";
import { Col, Container, Row } from 'react-bootstrap';
import { nanoid } from 'nanoid';
import { useGetSupportQuery } from '../api/apiSlice';
import MainLayout from '../layout/MainLayout'
import SingleSupport from '../components/support/SingleSupport';


const Support = () => {
  const {
    data: supports,
    isLoading: isPostLoading,
    isSuccess: isPostSuccess,
    isError: IsPostError,
    
  } = useGetSupportQuery()

  return (
    <MainLayout>
      <motion.div
        initial={ { width: 0 } }
        animate={ { width: "100%" } }
        exit={ { width: 0 } }
      >

          <div className="  bg-body-secondary p-4 rounded-4 m-3 ">
          <h1 className='text-center'>Support </h1>
          </div>
          

          <Container fluid>
            <Row>
              <Col className='d-flex gap-3 justify-content-between flex-wrap'>
              { isPostSuccess && !isPostLoading ? (
        supports ? (
          supports?.stand?.map((support) =>
          {
            
            return (
              <SingleSupport
              key= {nanoid()}
                title= {support.title}
                price= { support.price}
                id= { support._id}
               subtitle= {support.subtitle}
                img={ support.img }
              />
            );
          })
        ) : (
          <p>...Loading</p>
        )
      ) : IsPostError ? (
        <p>Error into call by get</p>
      ) : "nulla" }
              </Col>
            </Row>
          </Container>
          
      </motion.div>

    </MainLayout>
  )
}

export default Support
