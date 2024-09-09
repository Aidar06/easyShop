import {IPosts} from "./IPosts";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {fetchPosts} from "./ActionCreater";


interface PostState {
    posts: IPosts[],
    isLoading: boolean,
    error: string
}

const initialState: PostState = {
    posts: [],
    isLoading: false,
    error: ''
}

export const postSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {
    },
    extraReducers: (builder)=> {
        builder.addCase(fetchPosts.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(fetchPosts.fulfilled, (state, action: PayloadAction<IPosts[]>) => {
            state.isLoading = false;
            state.error = '';
            state.posts = action.payload;
        });
        builder.addCase(fetchPosts.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error.message || 'Error fetching posts';
        });
    }
})

export default postSlice.reducer