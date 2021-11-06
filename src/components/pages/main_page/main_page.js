import React, {useState} from "react";
import {Nav} from "react-bootstrap";

import Feedback from '../../../components/feedback/feedback';
import Menu from '../../../components/menu/menu';

import "./main_page.css";
import "../../../background.css"

const Main_page = () => {
    const [menuActive, setMenuActive] = useState(false);
    const items = [{value:"a", href:'./main', icon: ""},
    {value:"b", href:'./main', icon: ""},
    {value:"c", href:'./main', icon: ""},
    {value:"d", href:'./main', icon: ""}]
    const [feedbackActive, setFeedbackActive] = useState(false);

    document.addEventListener("DOMContentLoaded", () => {
        const text = document.querySelector('.happiness');
        text.innerHTML = text.textContent.replace(/\S/g, '<span>$&</span>');
      });

    function text_effect(event){
        if(event.target.tagName === 'SPAN') {
            event.target.classList.add('span_active');
        }
    }

     return (
        <div>
            <div className = "background">
                {/* <div className = "background_pic_1"></div>
                <div className = "background_pic_2"></div> */}
                <div className = "burger" onClick = {() => setMenuActive(!menuActive)}></div>
                <div className = "hp_title"></div>
                <div className = "main_block">
                    <div className = "menu">

                        <div className = "rec_menu">
                            <Nav.Link className = "text_title_menu" href = "/characters"> Characters </Nav.Link>
                        </div>

                        <div className = "rec_menu">
                            <Nav.Link className = "text_title_menu" href = "/spells"> Spells </Nav.Link> 
                        </div>

                        <div className = "rec_menu">
                            <Nav.Link className = "text_title_menu" href = "/books"> Books </Nav.Link> 
                        </div>

                        <div className = "rec_menu">
                            <Nav.Link className = "text_title_menu" href = "/films"> Films </Nav.Link>
                        </div>
                    </div>

                    <div className = "happiness" onMouseOver = {(event) => text_effect(event)}> Happiness can be found even in the   
                    darkest of times, if one only remembers to turn on the light. </div>   
                    
                    <div className = "feedback_frame">
                        <svg className = {feedbackActive ? 'feedback':'feedback active'} 
                        onClick = {() => setFeedbackActive(!feedbackActive)}> </svg>
                    </div>

                    <Feedback active = {feedbackActive} setActive = {setFeedbackActive}/>     
                </div>

            </div>       

            <Menu active = {menuActive} setActive = {setMenuActive} items = {items}/>
        </div>
    );
};

export default Main_page;