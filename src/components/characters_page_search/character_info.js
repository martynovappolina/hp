import React, {useState} from "react";
import './char_search.css';
import $ from 'jquery';
import Char_search from "./char_search";

const Char_info = ({n, char, active, setActive}) => {
    var i = 1;
    $('.card-block').on("dblclick", ( function() {
        if(i%2 === 0) { 
            $(this).find('.card').removeClass('flip')
            i++;
        } 
        else {
            $(this).find('.card').addClass('flip');
            i--;
        }
    }))

    var ImgStyle = {
        height: '25vh',
        width: '20vh',
        borderRadius: '100%',
        overflow: 'hidden',
        backgroundImage: "url(" + char.image + ")",
        backgroundSize: '100%',
        backgroundPosition: 'center'
      };

    const [charSearchActive, setCharSearchActive] = useState(false);

    // function switch_search() {
    //     setActive(false); 
    //     setCharSearchActive(true);
    // }

        return(
        <>
            <div className = {active ? 'main active1':'main'}>
                <div className = "card-block">
                    <div className = "card">
                        <div className = "side front">
                            <div className = "cancel_frame_info">
                                <div className = "cancel_frame">
                                    {/* <div className = 'back_char' onClick = {() => switch_search()}/> */}
                                    <div className = "cancel_char" onClick = {() => setActive(false)}/>  
                                </div>  
                            </div>

                            <div className = 'double_click'></div>
                            <div style = {ImgStyle}/>
                            
                            <div className = "char_main"> 
                                <div className = 'char_str'>
                                    <div className = "char_item_name">Name:</div>
                                    <div className = 'char_item_info'>{char.name}</div>
                                </div>    
                                <div className = 'char_str'>
                                    <div className = "char_item_name">Species:</div>
                                    <div className = 'char_item_info'>{char.species}</div>
                                </div>  
                                <div className = 'char_str'>
                                    <div className = "char_item_name">Gender</div>
                                    <div className = 'char_item_info'>{char.gender}</div>
                                </div>  
                                <div className = 'char_str'>
                                    <div className = "char_item_name">House: </div>
                                    <div className = 'char_item_info'>{char.house}</div>
                                </div>  
                                <div className = 'char_str'>
                                    <div className = "char_item_name">Date of birth: </div>
                                    <div className = 'char_item_info'>{char.dateOfBirth}</div>
                                </div>  
                                <div className = 'char_str'>
                                    <div className = "char_item_name">Wizard: </div>
                                    <div className = 'char_item_info'>{String(char.wizard)}</div>
                                </div>
                                <div className = 'char_str'>
                                    <div className = "char_item_name">Ancestry: </div>
                                    <div className = 'char_item_info'>{char.ancestry}</div>
                                </div>
                                <div className = 'char_str'>
                                    <div className = "char_item_name">Eye colour: </div>
                                    <div className = 'char_item_info'>{char.eyeColour}</div>
                                </div>
                                <div className = 'char_str'>
                                    <div className = "char_item_name">Hair colour: </div>
                                    <div className = 'char_item_info'>{char.hairColour}</div>
                                </div>  
                                {/* <div className = 'char_str'>
                                    <div className = "char_item_name">Wand:</div>
                                    <div className = 'char_item_wand'>
                                        <div className = 'char_str wand'>
                                            <div className = 'char_item_info bold'>wood: </div> 
                                            <div className = 'char_item_info'>{char.wand.wood}</div>
                                        </div>
                                        <div className = 'char_str wand'>
                                            <div className = 'char_item_info bold'>core:</div> 
                                            <div className = 'char_item_info'>{char.wand.core}</div>
                                        </div>
                                        <div className = 'char_str wand'>
                                            <div className = 'char_item_info bold'>length:</div> 
                                            <div className = 'char_item_info'>{char.wand.length}</div>
                                        </div>
                                    </div>
                                </div>   */}
                                <div className = 'char_str'>
                                    <div className = "char_item_name">Patronus: </div>
                                    <div className = 'char_item_info'>{char.patronus}</div>
                                </div>  
                                <div className = 'char_str'>
                                    <div className = "char_item_name">Actor: </div>
                                    <div className = 'char_item_info'>{char.actor}</div>
                                </div>  
                                <div className = 'char_str'>
                                    <div className = "char_item_name">Alive: </div>
                                    <div className = 'char_item_info'>{String(char.alive)}</div>
                                </div>                                          
                            </div>
                        </div>
                        <div className = {n === 1 ? 'side back one': n === 2 ? 'side back two': 'side back three'}></div>
                    </div>
                </div>
            </div>
            {/* <Char_search n = {n} active = {charSearchActive} setActive = {setCharSearchActive}/> */}
        </>
    )
};

export default Char_info;