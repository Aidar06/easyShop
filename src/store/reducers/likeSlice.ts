import {IPosts} from "./IPosts";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";


interface likeState {
    likes: IPosts[],

}

const initialState: likeState = {
    likes: JSON.parse(localStorage.getItem('easyShopLikes') || '[]')
}

export const likeSlice = createSlice({
    name: 'like',
    initialState,
    reducers: {
        setLike(state, action: PayloadAction<IPosts>) {
            const newLikes = [...state.likes, action.payload]
            localStorage.setItem('easyShopLikes', JSON.stringify(newLikes))
            state.likes = JSON.parse(localStorage.getItem('easyShopLikes') || '[]')
        },
        setDisLike(state, action: PayloadAction<IPosts>) {
            const newLikes = state.likes.filter(el=> el.id !== action.payload.id)
            localStorage.setItem('easyShopLikes', JSON.stringify(newLikes))
            state.likes = JSON.parse(localStorage.getItem('easyShopLikes') || '[]')
        },
    },
})

export default likeSlice.reducer