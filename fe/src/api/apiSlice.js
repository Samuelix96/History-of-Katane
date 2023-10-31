import { createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"

export const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({ baseUrl: `${process.env.REACT_APP_SERVER_URL}`}),
    endpoints: (builder) => ({
        getPosts : builder.query({
            query: () => '/posts',
        }),
        addPosts : builder.mutation({
            query: (posts) => ({
                url: '/posts/create',
                method: 'POST',
                body: posts,
            })
        }),



     //* KATANE
        getKatane: builder.query({
            query: (category) => `/katanas/bycategory?category=${category}`
        }),
        addKatane: builder.mutation({
            query: (kataneData) => ({
                url: '/katanas/create',
                method: 'POST',
                body: kataneData,
            })
        }),
        patchKatane: builder.mutation({
            query: (updateKata, id) => ({
                url: `/katanas/update/${id}`,
                method: 'PATCH',
                body: updateKata,
            })
        }),
        deleteKatane: builder.mutation({
            query: (id) => ({
                url: `/katanas/delete/${id}`,
                method: 'DELETE',
            })
        })
    })
})


export const {
    useGetPostsQuery,
    useAddPostsMutation,
    useGetKataneQuery,
    useAddKataneMutation,
} = apiSlice