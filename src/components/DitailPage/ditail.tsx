import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../store/hooks/redux";
import {fetchDitail} from "../../store/reducers/ActionCreater";

const Ditail = () => {
    const { id } = useParams<{ id: any}>()
    const dispatch = useAppDispatch()
    const {post,isLoading,error} = useAppSelector(state => state.ditailReducer)

    useEffect(()=>{
        dispatch(fetchDitail(id))
    }, [])

    return (
        <section id='ditail'>
            <div className="container">
                <div className="ditail">
                    <div className="ditail--img">
                        <img src={post.img} alt=""/>
                    </div>
                    <div className="ditail--info">
                        <h1>{post.name}</h1>
                        <h2>{post.price}$</h2>
                        <h3>контакты:</h3>
                        <h4>{post.contacts}</h4>
                        <p>{post.description}</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Ditail;