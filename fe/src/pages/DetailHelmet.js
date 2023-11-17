/** @format */

import React from 'react';
import SingleDetailHelmet from '../components/singleDetail/SingleDetailHelmet';
import MainLayout from '../layout/MainLayout';
import { useParams } from 'react-router-dom';
import { useGetHelmetByIdQuery } from '../api/apiSlice';
import { nanoid } from 'nanoid';

const DetailHelmet = () => {
  const { idhelmet } = useParams();
  const {
    data: helmets = [],
    isLoading,
    isSuccess,
    error,
  } = useGetHelmetByIdQuery(idhelmet);

  return (
    <MainLayout>
      {isSuccess && !isLoading ? (
        helmets ? (
          Array.isArray(helmets?.helmet) ? (
            helmets?.helmet?.map(product => (
              <SingleDetailHelmet
                key={nanoid()}
                img={product.img}
                description={product.description}
                id={product._id}
                image2={product.image2}
                image3={product.image3}
                image4={product.image4}
                price={product.price}
                image5={product.image5}
                title={product.title}
                height={product.height}
                weight={product.weight}
                subtitle={product.subtitle}
              />
            ))
          ) : (
            <SingleDetailHelmet
              key={nanoid()}
              img={helmets.helmet.img}
              description={helmets.helmet.description}
              title={helmets.helmet.title}
              subtitle={helmets.helmet.subtitle}
              id={helmets.helmet._id}
              price={helmets.helmet.price}
              image2={helmets.helmet.image2}
              image3={helmets.helmet.image3}
              image4={helmets.helmet.image4}
              image5={helmets.helmet.image5}
              height={helmets.helmet.height}
              weight={helmets.helmet.weight}
            />
          )
        ) : null
      ) : (
        error && <p>Si è verificato un errore: {error.message}</p>
      )}
    </MainLayout>
  );
};

export default DetailHelmet;
