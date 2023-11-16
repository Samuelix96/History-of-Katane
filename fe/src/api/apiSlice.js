/** @format */

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Search } from 'react-bootstrap-icons';
import Registration from '../pages/Registration';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: `${process.env.REACT_APP_SERVER_URL}` }),
  tagTypes: ['Posts'],
  endpoints: builder => ({
    //*  api POSTS
    getPosts: builder.query({
      query: () => '/posts',
      providesTags: ['Posts'],
    }),
    addPosts: builder.mutation({
      query: posts => ({
        headers: {
          'Content-Type': 'application/json',
        },
        url: '/posts/create',
        method: 'POST',
        body: posts,
      }),
      invalidatesTags: ['Posts'],
    }),
    deletePosts: builder.mutation({
      query: id => ({
        url: `/posts/delete/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Posts'],
    }),

    //*  api KATANE
    getAllKatane: builder.query({
      query: () => `/katanas`,
      providesTags: ['Katanas'],
    }),
    getKatane: builder.query({
      query: category => `/katanas/category/${category}`,
      providesTags: ['Katanas'],
    }),
    getKataneByTitle: builder.query({
      query: searchTerm => `/katanas/title/${searchTerm}`,
      providesTags: ['Katanas'],
    }),
    addKatane: builder.mutation({
      query: kataneData => ({
        url: '/katanas/create',
        method: 'POST',
        body: kataneData,
      }),
      invalidatesTags: ['Katanas'],
    }),
    getKataneById: builder.query({
      query: id => `/katanas/${id}`,
    }),
    patchKatane: builder.mutation({
      query: (updateKata, id) => ({
        url: `/katanas/update/${id}`,
        method: 'PATCH',
        body: updateKata,
      }),
      invalidatesTags: ['Katanas'],
    }),
    deleteKatane: builder.mutation({
      query: id => ({
        url: `/katanas/delete/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Katanas'],
    }),

    //* api ARMOR
    getArmor: builder.query({
      query: currentPage => `/armors?page=${currentPage}`,
      providesTags: ['Armors'],
    }),
    getArmorById: builder.query({
      query: id => `/armors/${id}`,
      providesTags: ['Armors'],
    }),
    getArmorByTitle: builder.query({
      query: searchTerm => `/armors/bytitle?title=${searchTerm}`,
      providesTags: ['Armors'],
    }),
    addArmor: builder.mutation({
      query: armor => ({
        url: `/armors/create`,
        method: 'POST',
        body: armor,
      }),
      invalidatesTags: ['Armors'],
    }),
    patchArmor: builder.mutation({
      query: (id, armorBody) => ({
        url: `/armors/update/${id}`,
        method: 'PATCH',
        body: armorBody,
      }),
      invalidatesTags: ['Armors'],
    }),
    deleteArmor: builder.mutation({
      query: id => ({
        url: `/armors/delete/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Armors'],
    }),

    //* api Helmet
    getHelmet: builder.query({
      query: currentPage => `/helmets?page=${currentPage}`,
      providesTags: ['Helmets'],
    }),
    getHelmetById: builder.query({
      query: id => `/helmets/${id}`,
      providesTags: ['Helmets'],
    }),
    getHelmetByTitle: builder.query({
      query: searchTerm => `/helmets/bytitle?title=${searchTerm}`,
      providesTags: ['Helmets'],
    }),
    addHelmet: builder.mutation({
      query: armor => ({
        url: `/helmets/create`,
        method: 'POST',
        body: armor,
      }),
      invalidatesTags: ['Helmets'],
    }),
    patchHelmet: builder.mutation({
      query: (id, armorBody) => ({
        url: `/helmets/update/${id}`,
        method: 'PATCH',
        body: armorBody,
      }),
      invalidatesTags: ['Helmets'],
    }),
    deleteHelmet: builder.mutation({
      query: id => ({
        url: `/helmets/delete/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Helmets'],
    }),

    //*
    getSupport: builder.query({
      query: currentPage => `/stands?page=${currentPage}`,
      providesTags: ['Stands'],
    }),
    getSupportById: builder.query({
      query: id => `/stands/${id}`,
      providesTags: ['Stands'],
    }),
    getSupportByTitle: builder.query({
      query: searchTerm => `/stands/bytitle?title=${searchTerm}`,
      providesTags: ['Stands'],
    }),
    addSupport: builder.mutation({
      query: armor => ({
        url: `/stands/create`,
        method: 'POST',
        body: armor,
      }),
      invalidatesTags: ['Stands'],
    }),
    patchSupport: builder.mutation({
      query: (id, armorBody) => ({
        url: `/stands/update/${id}`,
        method: 'PATCH',
        body: armorBody,
      }),
      invalidatesTags: ['Stands'],
    }),
    deleteSupport: builder.mutation({
      query: id => ({
        url: `/stands/delete/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Stands'],
    }),

    //api Registration
    addRegistration: builder.mutation({
      query: registration => ({
        url: `/registration`,
        method: 'POST',
        body: registration,
        headers: {
          'Content-Type': 'application/json',
        },
      }),
      invalidatesTags: ['Registration'],
    }),

    //* ResetPassword
    addForgetPassword: builder.mutation({
      query: forget => ({
        url: `/forgetpassword`,
        method: 'POST',
        body: forget,
        headers: {
          'Content-Type': 'application/json',
        },
        invalidatesTags: ['ForgetPassword'],
      }),
    }),

    addResetPassword: builder.mutation({
      query: reset => ({
        url: `/resetpassword`,
        method: 'POST',
        body: reset,
        headers: {
          'Content-Type': 'application/json',
        },
        invalidatesTags: ['ResetPassword'],
      }),
    }),

    // api for Stripe
    addSripe: builder.mutation({
      query: stripe => ({
        url: `/create-checkout-session`,
        method: 'POST',
        body: stripe,
      }),
      invalidatesTags: ['Stripe'],
    }),
  }),
});

export const {
  //? exportPOSTS
  useGetPostsQuery,
  useAddPostsMutation,
  useDeletePostsMutation,

  //? export KATANE
  useGetAllKataneQuery,
  useGetKataneQuery,
  useGetKataneByIdQuery,
  useGetKataneByTitleQuery,
  useAddKataneMutation,
  useDeleteKataneMutation,

  //? export ARMORS

  useGetArmorQuery,
  useGetArmorByIdQuery,
  useGetArmorByTitleQuery,
  useAddArmorMutation,
  usePatchArmorMutation,
  useDeleteArmorMutation,

  //? export HELMET

  useGetHelmetQuery,
  useGetHelmetByIdQuery,
  useGetHelmetByTitleQuery,
  useAddHelmetMutation,
  useDeleteHelmetMutation,
  usePatchHelmetMutation,

  //? export STANDS

  useGetSupportQuery,
  useGetSupportByIdQuery,
  useGetSupportByTitleQuery,
  useAddSupportMutation,
  usePatchSupportMutation,
  useDeleteSupportMutation,

  //* Api per la registration
  useAddRegistrationMutation,

  //* Api ForgetPassword
  useAddForgetPasswordMutation,

  // Api ResetPassword
  useAddResetPasswordMutation,

  // Api Stripe
  useAddSripeMutation,
} = apiSlice;
