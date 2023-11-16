/** @format */

import React from 'react';
import { useGetSupportByIdQuery } from '../api/apiSlice';

import { useParams } from 'react-router-dom';
import SingleSupport from '../components/support/SingleSupport';
import MainLayout from '../layout/MainLayout';
import { nanoid } from 'nanoid';
import SingleDetailStands from '../components/singleDetail/SingleDetailStands';

const DetailSupport = () => {
  const { idsupport } = useParams();

  const {
    data: supportsId = [],
    isLoading,
    isSuccess,
    error,
  } = useGetSupportByIdQuery(idsupport);

  return (
    <MainLayout>
      {isSuccess && !isLoading ? (
        supportsId ? (
          Array.isArray(supportsId.stand) ? (
            supportsId.stand.map(product => (
              <SingleDetailStands
                key={nanoid()}
                price={product.price}
                img={product.img}
                image2={product.image2}
                image3={product.image3}
                image4={product.image4}
                title={product.title}
                image5={product.image5}
                description={product.description}
                material={product.material}
                subtitle={product.subtitle}
                type={product.type}
              />
            ))
          ) : (
            <SingleDetailStands
              key={nanoid()}
              price={supportsId.stand.price}
              img={supportsId.stand.img}
              image2={supportsId.stand.image2}
              image3={supportsId.stand.image3}
              image4={supportsId.stand.image4}
              image5={supportsId.stand.image5}
              description={supportsId.stand.description}
              title={supportsId.stand.title}
              subtitle={supportsId.stand.subtitle}
              type={supportsId.stand.type}
              material={supportsId.stand.material}
              id={supportsId.stand._id}
            />
          )
        ) : null
      ) : (
        error && <p>Si è verificato un errore: {error.message}</p>
      )}
    </MainLayout>
  );
};

export default DetailSupport;
