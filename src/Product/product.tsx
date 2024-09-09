import React, {useState} from 'react';
import {IPosts} from "../store/reducers/IPosts";
import {FaHeart, FaRegHeart} from "react-icons/fa";
import {useAppDispatch, useAppSelector} from "../store/hooks/redux";
import {likePosts} from "../store/reducers/ActionCreater";
import {likeSlice} from "../store/reducers/likeSlice";
import {useNavigate} from "react-router-dom";


interface ProductProps {
    obj: IPosts;
}
const Product: React.FC<ProductProps> = ({obj}) => {
    const dispatch = useAppDispatch()
    const [indLike,setIndLike] = useState(obj.like)
    const navigate = useNavigate()

    const {likes} = useAppSelector(state => state.likeReducer)
    const {setLike,setDisLike} = likeSlice.actions

    const likeProduct = ()=> {
        const newItem = {
            ...obj,
            like: obj.like + 1
        }
        dispatch(likePosts({item: newItem, id: obj.id}))
        dispatch(setLike(newItem))
        setIndLike(indLike + 1)
    }

    const disLikeProduct = ()=> {
        const newItem = {
            ...obj,
            like: obj.like - 1
        }
        dispatch(likePosts({item: newItem, id: obj.id}))
        dispatch(setDisLike(newItem))
        setIndLike(indLike - 1)
    }

    const ditailPage = ()=> {
        navigate(`/product/${obj.id}`)
    }
    return (
        <div onClick={ditailPage} className='product'>
            <div className="product--img">
                {
                    obj.img?
                        <img src={obj.img} alt=""/>: ''
                }
            </div>
            <div className="product--info">
                <div className="product--info__price">
                    <h2>{obj.name}</h2>
                    <h3>{obj.price}$</h3>
                </div>
                <div className="product--info__like">
                    <p>{indLike}</p>
                    <div onClick={(e)=> e.stopPropagation()}>
                        {
                            likes.some(el=> el.id === obj.id)?
                                <FaHeart onClick={disLikeProduct} style={{color: "red"}}/>: <FaRegHeart onClick={likeProduct}/>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;