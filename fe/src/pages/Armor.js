import React from 'react'
import MainLayout from '../layout/MainLayout'
import { motion } from "framer-motion";
import { Col, Container, Row } from 'react-bootstrap';
import { useGetArmorQuery } from '../api/apiSlice';
import ArmorCard from '../components/armor/ArmorCard';
import { nanoid } from 'nanoid';
import "../components/style/armor.css"




const Armor = () =>
{

  const {
    data: armors,
    isLoading: isPostLoading,
    isSuccess: isPostSuccess,
    isError: IsPostError,
  } = useGetArmorQuery();

  console.log("Armors", armors)

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
                          helmet={build.helmet}
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
