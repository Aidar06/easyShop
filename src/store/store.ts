import {combineReducers, configureStore} from "@reduxjs/toolkit";
import postReducer from './reducers/postSlice'
import likeReducer from './reducers/likeSlice'
import ditailReducer from './reducers/ditailSlice'

const rootReducer = combineReducers({
    postReducer,
    likeReducer,
    ditailReducer,
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}

export type RootStore = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']