import React, {useState} from "react";
import './char_search.css';
import $ from 'jquery';
import Char_search from "./char_search";

const Char_info = ({char, active, setActive}) => {
    var i = 1;
    $('.card-block').on("dblclick", ( function() {
        if(i%2 === 0) { 
            $(this).find('.card').removeClass('flip')
            i++;
            console.log(i);
        } 
        else {
            $(this).find('.card').addClass('flip');
            i--;
            console.log(i);
        }
    }))

        return(
        <>
            <div className = {active ? 'main active1':'main'}>
                <div className = "card-block">
                    <div className = "card">
                        <div className = "side front">
                            <div className = "cancel_frame_info">
                                <div className = "cancel_frame">
                                    <div className = "cancel_char" onClick = {() => setActive(false)}></div>
                                </div>  
                                {/* {console.log(char)}  */}
                            </div>   
                        </div>
                        <div className = 'side back one'></div>
                    </div>
                </div>
            </div>
        </>
    )
    // var i = 1;
    // $('.card-block').on("dblclick", ( function() {
    //     if(i%2 === 0) { 
    //         $(this).find('.card').removeClass('flip')
    //         i++;
    //         console.log(i);
    //     } 
    //     else {
    //         $(this).find('.card').addClass('flip');
    //         i--;
    //         console.log(i);
    //     }
    // }))

    // const [charSearchActive, setCharSearchActive] = useState(false);

    // function char_searchh(){
    //     setActive(false);
    //     setCharSearchActive(!charSearchActive)
    // }

    // return(
    //     <>
    //         <div className = {active ? 'main active1':'main'}>
    //             <div className = "card-block">
    //                 <div className = "card">
    //                     <div className = "side front">
    //                         <div className = "cancel_frame_info">
    //                             <div className = "back_char" onClick = {() => char_searchh()}></div>
    //                             <div className = "cancel_char" onClick = {() => setActive(false)}></div>
    //                         </div>   
    //                     </div>
    //                     <div className = 'side back one'></div>
    //                 </div>
    //             </div>
    //         </div>
    //         <Char_search active = {charSearchActive} setActive = {setCharSearchActive}/>
    //     </>
    // )

};

export default Char_info;