import React from 'react'
import SingleDetailHelmet from '../components/singleDetail/SingleDetailHelmet'
import MainLayout from '../layout/MainLayout'
import { useParams } from 'react-router-dom'
import { useGetHelmetByIdQuery } from '../api/apiSlice'

const DetailHelmet = () => {

  
  const {
    data: helmets = [],
    isLoading,
    isSuccess,
    error
  } = useGetHelmetByIdQuery()


  return (
    <div>
      
    </div>
  )
}

export default DetailHelmet
