/** @format */

import React from 'react';
import MainLayout from '../layout/MainLayout';
import { useParams } from 'react-router-dom';
import { useGetKataneByIdQuery } from '../api/apiSlice';
import SingleDetailKatane from '../components/singleDetail/SingleDetailKatane';

const DetailKatane = () => {
  const { idkatane } = useParams();

  const {
    data: katane = [],
    isLoading,
    isSuccess,
    error,
  } = useGetKataneByIdQuery(idkatane);

  return (
    <MainLayout>
      {isSuccess && !isLoading ? (
        katane ? (
          Array.isArray(katane.kata) ? (
            katane.kata.map(product => (
              <SingleDetailKatane
                key={product._id}
                img={product.img}
                price={product.price}
                description={product.description}
                title={product.title}
                image2={product.image2}
                image3={product.image3}
                image4={product.image4}
                image5={product.image5}
                age={product.age}
                location={product.location}
                width={product.width}
                length={product.length}
                thickness={product.thickness}
              />
            ))
          ) : (
            <SingleDetailKatane
              key={katane.kata._id}
              img={katane.kata.img}
              description={katane.kata.description}
              title={katane.kata.title}
              price={katane.kata.price}
              id={katane.kata._id}
              image2={katane.kata.image2}
              image3={katane.kata.image3}
              image4={katane.kata.image4}
              image5={katane.kata.image5}
              thickness={katane.kata.thickness}
              location={katane.kata.location}
              age={katane.kata.age}
              width={katane.kata.width}
              length={katane.kata.length}
            />
          )
        ) : null
      ) : (
        error && <p>Si è verificato un errore: {error.message}</p>
      )}
    </MainLayout>
  );
};

export default DetailKatane;
