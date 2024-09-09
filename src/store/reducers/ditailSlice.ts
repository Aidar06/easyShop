import {IPosts} from "./IPosts";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {fetchDitail, fetchPosts} from "./ActionCreater";


interface ditailState {
    post: IPosts,
    isLoading: boolean,
    error: string
}

const initialState: ditailState = {
    post: {
        id: 0,
        name: '',
        contacts: '',
        img: '',
        description: '',
        like: 0,
        price: '',
    },
    isLoading: false,
    error: ''
}

export const ditailSlice = createSlice({
    name: 'ditail',
    initialState,
    reducers: {
    },
    extraReducers: (builder)=> {
        builder.addCase(fetchDitail.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(fetchDitail.fulfilled, (state, action: PayloadAction<IPosts>) => {
            state.isLoading = false;
            state.error = '';
            console.log(action.payload)
            state.post = action.payload;
        });
        builder.addCase(fetchDitail.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error.message || 'Error fetching posts';
        });
    }
})

export default ditailSlice.reducer