import { createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"

export const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({ baseUrl: `${process.env.REACT_APP_SERVER_URL}`}),
    endpoints: (builder) => ({

        //*  api POSTS
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

     //*  api KATANE
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

        //* api ARMOR
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

        //* api Helmet
        getHelmet : builder.query({
            query: () => `/helmets`
        }),
        addHelmet: builder.mutation({
            query: (armor) => ({
                url: `/helmets/create`,
                method: 'POST',
                body: armor,
            }),
            invalidatesTags: ['HELMETS']
        }),
        patchHelmet : builder.mutation({
            query: (id, armorBody) => ({
                url: `/helmets/update/${id}`,
                method: 'PATCH',
                body: armorBody
            }), 
            invalidatesTags: ['HELMETS']
        }),
        deleteHelmet : builder.mutation({
            query: (id) => ({
                url: `/helmets/delete/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['HELMETS']
        }),

        //* 
        getSupport : builder.query({
            query: () => `/stands`
        }),
        addSupport: builder.mutation({
            query: (armor) => ({
                url: `/stands/create`,
                method: 'POST',
                body: armor,
            }),
            invalidatesTags: ['HELMETS']
        }),
        patchSupport : builder.mutation({
            query: (id, armorBody) => ({
                url: `/stands/update/${id}`,
                method: 'PATCH',
                body: armorBody
            }), 
            invalidatesTags: ['HELMETS']
        }),
        deleteSupport : builder.mutation({
            query: (id) => ({
                url: `/stands/delete/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['HELMETS']
        }),

    })
})


export const {

    //? exportPOSTS
    useGetPostsQuery,
    useAddPostsMutation,
    
    //? export KATANE
    useGetKataneQuery,
    useGetKataneByIdQuery,
    useAddKataneMutation,

    //? export ARMORS

    useGetArmorQuery,
    useAddArmorMutation,
    usePatchArmorMutation,
    useDeleteArmorMutation,

    //? export HELMET
    
    useGetHelmetQuery,
    useAddHelmetMutation,
    useDeleteHelmetMutation,
    usePatchHelmetMutation,

    //? export STANDS 

    useGetSupportQuery,
    useAddSupportMutation,
    usePatchSupportMutation,
    useDeleteSupportMutation,

    
} = apiSlice