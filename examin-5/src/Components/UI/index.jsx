import React, {useEffect} from 'react';
import axios from 'axios';
import Bookmark from '../images/bookmark.png';
import Book from '../images/book.svg';
import Project from '../images/project.png';
import Box from '../images/box.svg';
import Star from '../images/star.svg';
import req from '../Api/Api';
import { Outlet, Link, NavLink } from "react-router-dom";

const UI = () => {
    const l = JSON.parse(localStorage.getItem("malumot"))
    return (
        <>
            <div className="container1">
                
        <NavLink to={"/"}> <div className="list">
        <a href="#"><img src={Book} alt="rasm" />Overview</a> </div>   
        </NavLink>
        <Link to={"./Repositories"}>  <div className="list">
        <a href="#"><img src={Bookmark} alt="rasm" />Repositories</a>
        </div> </Link>
        <Link to={'./Projects'}>  <div className="list">
        <a href="#"><img src={Project} alt="rasm" />Projects</a>
        </div> </Link>
        <Link to={'./Packages'}>  <div className="list">
        <a href="#"><img src={Box} alt="Rasm" />Packages </a>
        </div> </Link>
        <Link to={'./Stars'}>  <div className="list"><a href="#"><img src={Star} alt="rasm" />Stars</a></div></Link>
            </div>
             
            <Outlet />

        </>
    );
};

export default UI;