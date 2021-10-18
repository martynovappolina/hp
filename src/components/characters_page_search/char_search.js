import React, {useState} from "react";
import './char_search.css';
import $ from 'jquery';
import Char_info from "./character_info";

const Char_search = ({active, setActive}) => {
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

    var [dataa, setDataa] = useState([]);
    var [char, setChar] = useState([]);
    const [CharName, SetCharName] = useState("");
    const [charInfoActive, setCharInfoActive] = useState(false);

    fetch("http://hp-api.herokuapp.com/api/characters")
        .then(res => {
            if(res.ok) {
                return res.json();
            }
            else {
                console.log("ERROR")
                throw Error
            }
        })
        .then(data => {
            dataa = setDataa(data);
        }) 
        .catch(error => console.log(error))

    function char_infoo(c) {
        setActive(false); 
        setCharInfoActive(true);
        char = setChar(c)
    }

    return (
        <>
            <div className = {active ? 'main active':'main'}>
                <div className = "card-block">
                    <div className = "card">
                        <div className = "side front">
                            <div className = "cancel_frame">
                                <div className = "cancel_char" onClick = {() => setActive(false)}></div>
                            </div> 
                            <div className = "search">
                                    <input
                                    className="search_input"
                                    placeholder="Characters name:"
                                    type="text"
                                    onChange = {event => {SetCharName(event.target.value)}}
                                    />  
                            </div>  
                            <div className = "char_el_list">
                                {dataa.filter(char => {
                                    if(CharName == "") {
                                        return char;
                                    } else if (char.name.toLowerCase().includes(CharName.toLowerCase())) {
                                        return char;
                                    }
                                }).map(char => (
                                    <div key = {char.name}>
                                    <div className = "char_el_name">
                                        <div className = "char_el_img"></div>
                                        <div className = "char_el_name_text" onClick = {(char) => char_infoo(char)}>{char.name}</div>
                                    </div>
                                    </div>
                                    ))
                                }
                            </div> 
                        </div>
                        <div className = 'side back one'></div>
                    </div>
                </div>
            </div>
            <Char_info char = {char} active = {charInfoActive} setActive = {setCharInfoActive}/>
        </>
    );
};

export default Char_search;