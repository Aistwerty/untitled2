import React from 'react'
import {NavLink} from "react-router-dom";

export function Menu() {
    return (

        <nav className="nav">
            <NavLink className="nav-link active" aria-current="page" to="/">Главная</NavLink>
            <NavLink className="nav-link" to="/about">О нас</NavLink>
            <NavLink className="nav-link" to="/addpost">Добавить статью</NavLink>
            <NavLink className="nav-link" to="/contact-us">Контакты</NavLink>
            <NavLink className="nav-link" to="/auth">Вход</NavLink>
            <NavLink className="nav-link" to="/regclient">Регистрация</NavLink>
        </nav>
    )
}