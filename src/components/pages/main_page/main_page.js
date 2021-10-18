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
    const items_feedback = 
    [{value: "instagram", href: 'https://www.instagram.com/several_people_inside/', icon: '/src/icons/instagram.svg'},
     {value: "vk", href: 'https://vk.com/id209059953', icon: '/src/icons/vk.svg'}]
    
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

                    <div className = "happiness"> Happiness can be found even in the </div>   
                    <div className = "happiness"> darkest of times, if one only remembers </div>      
                    <div className = "happiness"> to turn on the light. </div>   
                    
                    <div className = "feedback_frame">
                        <svg className = {feedbackActive ? 'feedback':'feedback active'} 
                        onClick = {() => setFeedbackActive(!feedbackActive)}> </svg>
                    </div>

                    <Feedback active = {feedbackActive} setActive = {setFeedbackActive} items = {items_feedback}/>     
                </div>

            </div>       

            <Menu active = {menuActive} setActive = {setMenuActive} items = {items}/>
        </div>
    );
};

export default Main_page;