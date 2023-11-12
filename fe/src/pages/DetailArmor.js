import React, { useEffect} from 'react'
import MainLayout from '../layout/MainLayout'
import { useParams } from 'react-router-dom'
import { useGetArmorByIdQuery } from '../api/apiSlice'
import SingleDetailArmor from '../components/singleDetail/SingleDetailArmor'
import { nanoid } from 'nanoid'


const DetailArmor = () =>
{


  const { idarmor } = useParams();

  const {
    data: armors,
    isLoading,
    isSuccess,
    error
  } = useGetArmorByIdQuery(idarmor)



  
  return (
    <MainLayout>
     
        
          { isSuccess && !isLoading ? (
            armors ? (
              Array.isArray(armors.armor) ? (
                armors.armor.map((product) => (
                  <SingleDetailArmor
                    key={ product._id }
                    img={ product.img }
                    description={ product.description }
                    title={ product.title }
                  />
                ))
              ) : (
                <SingleDetailArmor
                  key={ armors.armor._id }
                  img={ armors.armor.img }
                  description={ armors.armor.description }
                  title={ armors.armor.title }
                  id={ armors.armor._id }
                />
              )
            ) : null
          ) : (
            error && <p>Si è verificato un errore: { error.message }</p>
          ) }



       
    </MainLayout>

  )
}

export default DetailArmor
