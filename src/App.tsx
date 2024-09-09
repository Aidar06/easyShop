import React from 'react';
import './App.scss';
import Header from "./components/Heeder/header";
import {Route, Routes} from "react-router-dom";
import Hero from "./components/Hero/hero";
import Acc from "./components/Acc/acc";
import Ditail from "./components/DitailPage/ditail";

function App() {
    return (
        <div className="App">
            <Header/>
            <Routes>
                <Route path='/' element={<Hero/>}/>
                <Route path='/acc' element={<Acc/>}/>
                <Route path='/product/:id' element={<Ditail/>}/>
            </Routes>
        </div>
    );
}

export default App;
