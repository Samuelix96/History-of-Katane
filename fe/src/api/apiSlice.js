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
        })
    })
})


export const {
    useGetPostsQuery,
    useAddPostsMutation,
} = apiSlice