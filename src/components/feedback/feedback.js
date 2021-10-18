import React from "react";
import './feedback.css'

const Feedback = ({active, setActive, items}) => {
    return (
        <div className = {active ? 'feedback_container active':'feedback_container'}>
                <div className = "feedback_content">
                    {items.map(item =>
                        <div className = "feedback_icon"> 
                            {/* {item.icon}; */}
                        </div>
                    )} 
                </div>
                <div className = "cancel"  onClick = {() => setActive(false)}></div>
        </div>
    );
};

export default Feedback;