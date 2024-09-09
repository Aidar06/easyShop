import {AppDispatch} from "../store";
import axios from 'axios'
import {IPosts} from "./IPosts";
import {postSlice} from "./postSlice";
import {createAsyncThunk} from "@reduxjs/toolkit";

export const fetchPosts = createAsyncThunk (
    'post/fetchAll',
    async (_, thunkAPI)=> {
        try {
            const response = await axios.get<IPosts[]>('https://x8ki-letl-twmt.n7.xano.io/api:1LFkd1rT/posts')
            return response.data
        }catch (e){
            return thunkAPI.rejectWithValue('error')
        }
    }

)

interface obj {
    item: object,
    id: number
}

export const likePosts = createAsyncThunk (
    'post/likePost',
    async (obj: obj, thunkAPI)=> {
        try {
            const response = await axios.patch<IPosts[]>(`https://x8ki-letl-twmt.n7.xano.io/api:1LFkd1rT/posts/${obj.id}`, obj.item)
            return response.data
        }catch (e){
            return thunkAPI.rejectWithValue('error')
        }
    }

)

export const fetchDitail = createAsyncThunk (
    'post/fetchDitail',
    async (id: number, thunkAPI)=> {
        try {
            const response = await axios.get<IPosts>(`https://x8ki-letl-twmt.n7.xano.io/api:1LFkd1rT/posts/${id}`)
            return response.data
        }catch (e){
            return thunkAPI.rejectWithValue('error')
        }
    }

)

interface pushPost {
    name: string,
    contacts: string,
    img: any,
    description: string,
    like: number,
    price: string,
}

export const postPost = createAsyncThunk (
    'post/fetchDitail',
    async (obj: pushPost, thunkAPI)=> {
        try {
            const response = await axios.post<pushPost>(`https://x8ki-letl-twmt.n7.xano.io/api:1LFkd1rT/posts`, obj)
            return response.data
        }catch (e){
            return thunkAPI.rejectWithValue('error')
        }
    }

)

