import './App.css';
import React from 'react';
import {Route, BrowserRouter, NavLink} from "react-router-dom";
import {Menu} from "./components/Menu";
import {PostList} from "./components/PostList";
import {ViewPost} from "./components/Post";
import {AddPost} from "./components/AddPost";
import {ClientAuth} from "./components/Auth";
import {RegClient} from "./components/RegClient";
import {ClientCab} from "./components/cabinet";

function MainPage(){
    return(
        <div className='container-sm my-5'>
        <h2>Добропожаловать на главную страницу!</h2>
        </div>
    )
}
function AboutUs(){
    return(
        <div className='container-sm my-5'>
            <h2>На этой странице будет размещена информации о нас, но чуть позже. Наберитесь терперия!</h2>
        </div>
    )
}
function ContactUs(){
    return (
        <div className='container-sm my-5'>
            <div className="mb-3"><input type="text" className="form-control"/></div>
            <div className="mb-3"><input type="text" className='form-control'/></div>
            <div className="mb-3"><textarea type="text" className='form-control'/></div>
            <div className="mb-3"><input type="submit" className='form-control btn btn-info'/></div>
        </div>
    )
}


function App() {
  return (
    <div className="container">
        <BrowserRouter>
            <Menu/>
            <Route exact path='/' render={()=><PostList/>} />
            <Route path='/about' render={()=><AboutUs/>} />
            <Route path='/contact-us' render={()=><ContactUs/>} />
            <Route path='/post' render={()=><ViewPost/>} />
            <Route path='/addpost' render={()=><AddPost/>} />
            <Route path='/auth' render={()=><ClientAuth/>} />
            <Route path='/regclient' render={()=><RegClient/>} />
            <Route path='/cabinet' render={()=><ClientCab/>} />
        </BrowserRouter>
    </div>
  );
}

export default App;
