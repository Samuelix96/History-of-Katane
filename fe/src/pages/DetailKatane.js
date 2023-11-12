import React from 'react'
import MainLayout from '../layout/MainLayout'
import { useParams } from 'react-router-dom'
import { useGetKataneByIdQuery } from '../api/apiSlice'
import SingleDetailKatane from '../components/singleDetail/SingleDetailKatane'


const DetailKatane = () => {

  const {idkatane} = useParams()

const {
  data: katane = [],
  isLoading,
  isSuccess,
  error
} = useGetKataneByIdQuery(idkatane);


  return (
    <MainLayout>
     
        
    { isSuccess && !isLoading ? (
      katane ? (
        Array.isArray(katane.kata) ? (
          katane.kata.map((product) => (
            <SingleDetailKatane
              key={ product._id }
              img={ product.img }
              description={ product.description }
              title={ product.title }
            />
          ))
        ) : (
          <SingleDetailKatane
            key={ katane.kata._id }
            img={ katane.kata.img }
            description={ katane.kata.description }
            title={ katane.kata.title }
            id={ katane.kata._id }
          />
        )
      ) : null
    ) : (
      error && <p>Si è verificato un errore: { error.message }</p>
    ) }



 
</MainLayout>
  )
}

export default DetailKatane
