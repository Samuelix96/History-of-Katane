import { createSlice, } from "@reduxjs/toolkit";


const initialState = {
    post : "",
}

const PostsSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        setPost : (state, action) => {
            state.post = action.payload
        }
    }

})


export const { setPost} = PostsSlice.actions

export default PostsSlice.reducer