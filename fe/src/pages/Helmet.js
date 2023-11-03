import React from 'react'
import MainLayout from '../layout/MainLayout'
import { motion } from "framer-motion";
import { Col, Container, Row } from 'react-bootstrap';
import { nanoid } from 'nanoid';
import { useGetHelmetQuery } from '../api/apiSlice';
import SingleHelmet from '../components/helmet/SingleHelmet';


const Helmet = () => {
    const {
        data: helmets,
        isLoading: isPostLoading,
        isSuccess: isPostSuccess,
        isError: IsPostError,
      } = useGetHelmetQuery();
    
      console.log("Helmets", helmets)
    
      return (
        <div className=''>
          <MainLayout>
            <motion.div
              initial={ { width: 0 } }
              animate={ { width: "100%" } }
              exit={ { width: 0 } }
              
            >
              <h1 className='text-center '>Helmets</h1>
              <Container fluid className='my-5 '>
                <Row>
                  <Col className='d-flex justify-content-between flex-wrap gap-3'>
                    { isPostSuccess && !isPostLoading ? (
                      helmets ? (
                        helmets?.helmet?.map((element) =>
                        {
                          return (
                            <SingleHelmet
                              key={ nanoid() }
                              img={ element.img }
                              title={ element.title }
                              helmet={element.helmet}
                              price={ element.price }
                            />
                          );
                        })
                      ) : (
                        <p>...Loading</p>
                      )
                    ) : IsPostError ? (
                      <p>Error into call by get</p>
                    ) : null }
                  </Col>
                </Row>
              </Container>
    
            </motion.div>
          </MainLayout>
        </div>
    
      )
}

export default Helmet
