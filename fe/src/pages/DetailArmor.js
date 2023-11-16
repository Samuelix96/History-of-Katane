/** @format */

import React, { useEffect } from 'react';
import MainLayout from '../layout/MainLayout';
import { useParams } from 'react-router-dom';
import { useGetArmorByIdQuery } from '../api/apiSlice';
import SingleDetailArmor from '../components/singleDetail/SingleDetailArmor';
import { nanoid } from 'nanoid';

const DetailArmor = () => {
  const { idarmor } = useParams();

  const {
    data: armors,
    isLoading,
    isSuccess,
    error,
  } = useGetArmorByIdQuery(idarmor);

  return (
    <MainLayout>
      {isSuccess && !isLoading ? (
        armors ? (
          Array.isArray(armors.armor) ? (
            armors.armor.map(product => (
              <SingleDetailArmor
                key={nanoid()}
                img={product.img}
                description={product.description}
                title={product.title}
                image2={product.image2}
                image3={product.image3}
                image4={product.image4}
                image5={product.image5}
                price={product.price}
                armor={product.armor}
                sleeves={product.masleevessk}
                helmet={product.helmet}
                mask={product.mask}
                id={product._id}
              />
            ))
          ) : (
            <SingleDetailArmor
              key={nanoid()}
              img={armors.armor.img}
              description={armors.armor.description}
              title={armors.armor.title}
              id={armors.armor._id}
              image2={armors.armor.image2}
              image3={armors.armor.image3}
              image4={armors.armor.image4}
              image5={armors.armor.image5}
              helmet={armors.armor.helmet}
              mask={armors.armor.mask}
              sleeves={armors.armor.sleeves}
              price={armors.armor.price}
              armor={armors.armor.armor}
            />
          )
        ) : null
      ) : (
        error && <p>Si è verificato un errore: {error.message}</p>
      )}
    </MainLayout>
  );
};

export default DetailArmor;
