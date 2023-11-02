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
            }),
            invalidatesTags: ['POSTS']
        }),



     //* KATANE
        getKatane: builder.query({
            query: (category) => `/katanas/category?category=${category}`
        }),
        addKatane: builder.mutation({
            query: (kataneData) => ({
                url: '/katanas/create',
                method: 'POST',
                body: kataneData,
            }),
            invalidatesTags: ['KATANE']
        }),
        getKataneById : builder.query({
            query: (id) => `/katanas/byid/${id}`
        }),
        patchKatane: builder.mutation({
            query: (updateKata, id) => ({
                url: `/katanas/update/${id}`,
                method: 'PATCH',
                body: updateKata,
            }),
            invalidatesTags: ['KATANE']
        }),
        deleteKatane: builder.mutation({
            query: (id) => ({
                url: `/katanas/delete/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['KATANE']
        }),



        //* ARMOR
        getArmor : builder.query({
            query: () => `/armors`
        }),
        addArmor: builder.mutation({
            query: (armor) => ({
                url: `/armors/create`,
                method: 'POST',
                body: armor,
            }),
            invalidatesTags: ['ARMORS']
        }),
        patchArmor : builder.mutation({
            query: (id, armorBody) => ({
                url: `/armors/update/${id}`,
                method: 'PATCH',
                body: armorBody
            }), 
            invalidatesTags: ['ARMORS']
        }),
        deleteArmor : builder.mutation({
            query: (id) => ({
                url: `/armors/delete/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['ARMORS']
        }),

    })
})


export const {
    //* POSTS
    useGetPostsQuery,
    useAddPostsMutation,
    
    //* KATANE
    useGetKataneQuery,
    useGetKataneByIdQuery,
    useAddKataneMutation,

    //* ARMORS

    useGetArmorQuery,
    useAddArmorMutation,
    usePatchArmorMutation,
    useDeleteArmorMutation,
    
} = apiSlice