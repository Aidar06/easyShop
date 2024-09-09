import React, {useEffect, useState} from 'react';
import {IoSearch} from "react-icons/io5";
import Product from "../../Product/product";
import {useAppDispatch, useAppSelector} from "../../store/hooks/redux";
import {fetchPosts} from "../../store/reducers/ActionCreater";
import {IPosts} from "../../store/reducers/IPosts";
import axios from "axios";

const Hero = () => {
    const dispatch = useAppDispatch()
    const [data,setData] = useState<IPosts[]>([])
    const {posts,isLoading,error} = useAppSelector(state => state.postReducer)

    useEffect(()=>{
        dispatch(fetchPosts())
    }, [])

    useEffect(() => {
        if (posts.length > 0) {
            setData(posts); // Устанавливаем данные, когда posts обновляется
        }
    }, [posts]);

    const filteredProducts =(e: string)=> {
            const newPosts = posts.filter(posts =>
                posts.name.toLowerCase().includes(e.toLowerCase())
            );
            setData(newPosts)
    }



    return (
        <section id='hero'>
            <div className="container">
                <div className="hero">
                    <div className="hero--search">
                        <input type="text" placeholder='поиск' onChange={(e)=> {filteredProducts(e.target.value.trim())}}/>
                        <div>
                            <IoSearch />
                        </div>
                    </div>
                    <div className="hero--products">
                        {
                            isLoading?
                                <h4>загрузка...</h4>:
                                error?
                                    <h4>ошибка сервера</h4>:
                                    data.length !== 0?
                                        data.map(el => {
                                            return <Product key={el.id} obj={el}/>
                                        }):
                                        <h4>ничего не найдено</h4>
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;