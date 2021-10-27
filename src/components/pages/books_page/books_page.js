import React, { useState } from "react";
import Menu from '../../../components/menu/menu';
import Book_info from "./books_info";

import "../../../background.css"
import "./books_page.css"

const Books = () => {

    const [menuActive, setMenuActive] = useState(false);
    const [bookInfo, setBookInfo] = useState(false)
    const items = [{ value: "a", href: './main', icon: "" },
        { value: "b", href: './main', icon: "" },
        { value: "c", href: './main', icon: "" },
        { value: "d", href: './main', icon: "" }
    ]

    var rotateY = 0,
        rotateX = 0;
    var [b, setB] = useState();

    document.onkeydown = function(e) {
        if (e.keyCode === 37) rotateY += 4;
        // else if (e.keyCode === 38) rotateX -= 4;
        else if (e.keyCode === 39) rotateY -= 4;
        // else if (e.keyCode === 40) rotateX += 4;

        document.querySelector('.cube').style.transform =
            'rotateY(' + rotateY + 'deg) ' + 'rotateX(' + rotateX + 'deg)';
    }

    return ( 
        <>
            <div className = "background">
                <div className = "burger" onClick = {() => setMenuActive(!menuActive) }></div> 
                <div className = "books_title" > Books </div>

                <div className = "keyboard">
                    <div className = "left"/>
                    <div className = "right"/>
                </div>

                <div className = "cube_container">
                    <div className = "cube">
                        <div className = "cube_side cube_front" onClick = {() => {
                            setBookInfo(true)
                            setB(0)
                        }}/> 
                        <div className = "cube_side cube_back"onClick = {() => {
                            setBookInfo(true)
                            setB(4)
                        }}/> 
                        <div className = "cube_side cube_right"onClick = {() => {
                            setBookInfo(true)
                            setB(2)
                        }}/> 
                        <div className = "cube_side cube_left"onClick = {() => {
                            setBookInfo(true)
                            setB(6)
                        }}/>  
                        <div className = "cube_side cube_one"onClick = {() => {
                            setBookInfo(true)
                            setB(1)
                        }}/>  
                        <div className = "cube_side cube_two"onClick = {() => {
                            setBookInfo(true)
                            setB(7)
                        }}/>  
                        <div className = "cube_side cube_three"onClick = {() => {
                            setBookInfo(true)
                            setB(3)
                        }}/>  
                        <div className = "cube_side cube_four"onClick = {() => {
                            setBookInfo(true)
                            setB(5)
                        }}/>  
                        {/* <div className = "cube_side cube_top"/> 
                        <div className = "cube_side cube_bottom"/>  */}
                        <div className = "cube_shadow"></div> 
                    </div>
                </div>
            </div>
            <Menu active = { menuActive} setActive = {setMenuActive} items = { items}/> 
            <Book_info b = {b} active = { bookInfo} setActive = { setBookInfo } /> 
        </>
    )}

export default Books;