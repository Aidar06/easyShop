import React, {useEffect, useState} from 'react';
import {PiCardsThree, PiHeartFill, PiPlusBold} from "react-icons/pi";
import {useAppDispatch, useAppSelector} from "../../store/hooks/redux";
import Product from "../../Product/product";
import {postPost} from "../../store/reducers/ActionCreater";

const Acc = () => {
    const dispatch = useAppDispatch()
    const {likes} = useAppSelector(state => state.likeReducer)
    const [nav,setNav] = useState('like')
    const navChang = ()=> {
        if (nav==='like'){
            return 'Избранные'
        }else if (nav==='add'){
            return 'Добавить товар'
        }
    }

    const [img,setImg] = useState('')
    const [name,setName] = useState('')
    const [prise ,setPrice] = useState('')
    const [contact,setContact] = useState('')
    const [description,setDescription] = useState('')

    const pushPost = ()=> {
        const item = {
            name: name,
            contacts: contact,
            img: img,
            description: description,
            like: 0,
            price: prise,
        }

        if (img && name && prise && contact && description){
            dispatch(postPost(item))
        }
    }

    return (
        <section id='acc'>
            <div className="container">
                <div className="acc">
                    <div className="acc--group">
                        <h1>{navChang()}</h1>
                        {
                            nav === 'like'?
                                <div className="acc--group__like">
                                    {
                                        likes.map(el=> (
                                            <Product key={el.id} obj={el}/>
                                        ))
                                    }
                                </div>:
                                    <div className="acc--group__add">
                                        <div className='acc--group__add--img'>
                                            <h2>ссылка фото:</h2>
                                            <input type="text" onChange={(e)=> setImg(e.target.value)}/>

                                            {
                                                img?
                                                    <img src={img} alt=""/>: ''
                                            }
                                        </div>
                                        <div className='acc--group__add--input'>
                                            <h2>называния:</h2>
                                            <input type="text" onChange={(e)=> {setName(e.target.value); }}/>
                                        </div>
                                        <div className='acc--group__add--input'>
                                            <h2>цена:</h2>
                                            <input type="number" onChange={(e)=> {setPrice(e.target.value); }}/>
                                        </div>
                                        <div className='acc--group__add--input'>
                                            <h2>контакты gmail или телефон:</h2>
                                            <input type="text" onChange={(e)=> {setContact(e.target.value); }}/>
                                        </div>
                                        <div className='acc--group__add--input'>
                                            <h2>описания товара:</h2>
                                            <textarea onChange={(e)=> {setDescription(e.target.value); }}></textarea>
                                        </div>
                                        <button onClick={pushPost}>публиковать</button>
                                    </div>

                        }
                    </div>
                    <div className="acc--change">
                        <div onClick={()=> setNav('like')} style={{transform: nav === 'like'? 'scale(1.5)': ''}}><PiHeartFill /></div>
                        <div onClick={()=> setNav('add')} style={{transform: nav === 'add'? 'scale(1.5)': ''}}><PiPlusBold /></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Acc;