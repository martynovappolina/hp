import React, {useEffect, useState} from "react";
import './char_search.css';
import $ from 'jquery';
import Char_info from "./character_info";

const Char_search = ({n, active, setActive}) => {
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

    var [data, setData] = useState([]);
    var [char, setChar] = useState({});
    const [CharName, SetCharName] = useState("");
    const [charInfoActive, setCharInfoActive] = useState(false);

    var path_api = "http://hp-api.herokuapp.com/api/characters"
    // n === 1 ? path_api = "http://hp-api.herokuapp.com/api/characters" : n === 2 ? 
    //             path_api = "http://hp-api.herokuapp.com/api/characters/students" :
    //             path_api = "http://hp-api.herokuapp.com/api/characters/stuff"

    useEffect(() => {
        var request = new XMLHttpRequest();
        request.open('GET', path_api);
        request.responseType = 'json';
        request.send();
        request.onload = function() {
            setData(request.response)
        }
    }, []);

    function char_infoo(c) {
        setChar(c);
        setActive(false); 
        setCharInfoActive(true);
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
                            <div className = 'double_click'></div>
                            <div className = "search">
                                    <input
                                    className="search_input"
                                    placeholder="Characters name:"
                                    type="text"
                                    onChange = {event => {SetCharName(event.target.value)}}
                                    />  
                            </div>  
                            <ul className = "char_el_list">
                                {
                                  data
                                    .filter(char => {
                                      if(CharName === "") {
                                          return char;
                                      } else if (char.name.toLowerCase().includes(CharName.toLowerCase())) {
                                          return char;
                                      } else {
                                        return "";
                                      }
                                    })
                                    .map(char => (
                                        <li key = {char.name}>
                                          <div className = "char_el_name">
                                              <div className = "char_el_img"></div>
                                              <div className = "char_el_name_text" onClick = {() => char_infoo(char)}>{char.name}</div>
                                          </div>
                                        </li>
                                    ))
                                }
                            </ul> 
                        </div>
                        <div className = {n === 1 ? 'side back one': n === 2 ? 'side back two': 'side back three'}></div>
                        
                    </div>
                </div>
            </div>
            <Char_info n = {n} char = {char} active = {charInfoActive} setActive = {setCharInfoActive}/>
        </>
    );
};

export default Char_search;