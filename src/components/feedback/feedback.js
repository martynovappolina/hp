import React from "react";
import './feedback.css'

import icon_instagram from '../../icons/instagram.svg'
import icon_vk from '../../icons/vk.svg'

const Feedback = ({active, setActive}) => {
    const items_feedback = 
    [{value: "instagram", href: 'https://www.instagram.com/several_people_inside/', icon: icon_instagram},
     {value: "vk", href: 'https://vk.com/id209059953', icon: icon_vk}]

    return (
        <div className = {active ? 'feedback_container active':'feedback_container'}>
                <div className = "feedback_content">
                    {items_feedback.map(item =>
                        <a href = {item.href} rel="noreferrer" target="_blank">
                            <div className = 'feedback_icon'>
                                <img src = {item.icon} style={{height: 70 + '%', width: 70 + '%'}}/>
                            </div>
                        </a>
                    )} 
                </div>
                <div className = "cancel"  onClick = {() => setActive(false)}></div>
        </div>
    );
};

export default Feedback;