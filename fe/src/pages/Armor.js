import React from 'react'
import MainLayout from '../layout/MainLayout'
import { motion } from "framer-motion";
import SingleArmor from '../components/armor/SingleArmor';
import { Col, Container, Row } from 'react-bootstrap';
import { useGetArmorQuery } from '../api/apiSlice';
const Armor = () => {

  const {
    data: armors,
    Loading: isLoading,
    Success: isSuccess,
    Error: isError 
  } = useGetArmorQuery();

  console.log("Armors", armors)

  return (
    <div> 
      <MainLayout>
        <motion.div
        initial={ { width: 0 } }
        animate={ { width: "100%" } }
        exit={ { width: 0 } }
      >
        <h1>Armor</h1>
        <Container fluid className='my-5'>
            <Row>
              <Col className='d-flex justify-content-between align-items-center gap-3 flex-wrap'>
              { isSuccess && !isLoading ? (
            armors ? (
              armors.armor?.map((build) =>
              {

                return (
                  <SingleArmor
                  key={build._id}
                    img={ build.img }
                    title={ build.title }
                    price= { build.price}
                    
                  />
                );
              })
            ) : (
              <p>...Loading</p>
            )
          ) : isError ? (
            <p>Error into call by category</p>
          ) : null }
              </Col>
            </Row>
          </Container>
              
      </motion.div>
      </MainLayout>
    </div>
    
  )
}

export default Armor
