import {useDispatch, TypedUseSelectorHook, useSelector} from "react-redux";
import {AppDispatch,RootStore} from "../store";


export const useAppDispatch = ()=> useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootStore> = useSelector