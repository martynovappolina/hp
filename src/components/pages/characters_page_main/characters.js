import React, {useState} from "react";

import Menu from '../../../components/menu/menu';
import CharSearch from "../../characters_page_search/char_search";

import "../../../background.css"
import './characters.css'

const Characters = () => {

  function rotate_all(event) {
    const card_all = document.querySelector('.characters_card_all');
    const cardItem = card_all.querySelector('.characters_all');
    const HalfHeight = cardItem.offsetHeight / 2;
    const HalfWidth = cardItem.offsetWidth / 2;
    cardItem.style.transform = 'rotateX('+-(event.clientY-cardItem.getBoundingClientRect().top-HalfHeight)/7+'deg) rotateY('+(event.clientX - cardItem.getBoundingClientRect().left-HalfWidth)/7+'deg)'
  }

  function stop_rotate_all(event) {
    const card_all = document.querySelector('.characters_card_all');
    const cardItem = card_all.querySelector('.characters_all');
    cardItem.style.transform = 'rotate(0)'
  }

  function rotate_stud(event) {
    const card_all = document.querySelector('.characters_card_students');
    const cardItem = card_all.querySelector('.characters_students');
    const HalfHeight = cardItem.offsetHeight / 2;
    const HalfWidth = cardItem.offsetWidth / 2;
    cardItem.style.transform = 'rotateX('+-(event.clientY-cardItem.getBoundingClientRect().top-HalfHeight)/7+'deg) rotateY('+(event.clientX - cardItem.getBoundingClientRect().left-HalfWidth)/7+'deg)'
  }

  function stop_rotate_stud(event) {
    const card_all = document.querySelector('.characters_card_students');
    const cardItem = card_all.querySelector('.characters_students');
    cardItem.style.transform = 'rotate(0)'
  }

  function rotate_stuff(event) {
    const card_all = document.querySelector('.characters_card_stuff');
    const cardItem = card_all.querySelector('.characters_stuff');
    const HalfHeight = cardItem.offsetHeight / 2;
    const HalfWidth = cardItem.offsetWidth / 2;
    cardItem.style.transform = 'rotateX('+-(event.clientY-cardItem.getBoundingClientRect().top-HalfHeight)/7+'deg) rotateY('+(event.clientX - cardItem.getBoundingClientRect().left-HalfWidth)/7+'deg)'
  }

  function stop_rotate_stuff(event) {
    const card_all = document.querySelector('.characters_card_stuff');
    const cardItem = card_all.querySelector('.characters_stuff');
    cardItem.style.transform = 'rotate(0)'
  }

  const [menuActive, setMenuActive] = useState(false);
  const [charSearchActive, setCharSearchActive] = useState(false);
  const items = [{value:"a", href:'./main', icon: ""},
  {value:"b", href:'./main', icon: ""},
  {value:"c", href:'./main', icon: ""},
  {value:"d", href:'./main', icon: ""}]

  var [n, setN] = useState(0) // all/characters/stuff
  
  function all() {
    setN(1)
    setCharSearchActive(!charSearchActive)
  }

  function stud() {
    setN(2)
    setCharSearchActive(!charSearchActive)
  }

  function stuff() {
    setN(3)
    setCharSearchActive(!charSearchActive)
  }
  
    return (
      <>
        <div className = "background">
          
          <div className = "burger" onClick = {() => setMenuActive(!menuActive)}></div>
          <div className = "characters_title">Characters</div>
          
          <div className = "c1"></div>
          <div className = "c2"></div>
          <div className = "c3"></div>
          <div className = "c4"></div>
          <div className = "c5"></div>
          <div className = "c6"></div>

          <div className = "characters_card_all" onMouseMove = {(event) => rotate_all(event)} onMouseOut = {(event) => stop_rotate_all(event)}>
            <div className = "characters_all"></div>
          </div>

          <div className = "characters_card_stuff" onMouseMove = {(event) => rotate_stuff(event)} onMouseOut = {(event) => stop_rotate_stuff(event)}>
            <div className = "characters_stuff"></div>
          </div>

          <div className = "characters_card_students" onMouseMove = {(event) => rotate_stud(event)} onMouseOut = {(event) => stop_rotate_stud(event)}>
            <div className = "characters_students"></div>
          </div>

          <div className = "cont_link_all">
            <div className = "link" onClick = {() => all()}>
              <div className = "text_link">All charecters</div>
            </div>
          </div>
          <div className = "cont_link_stud">
            <div className = "link" onClick = {() => stud()}>
              <div className = "text_link">Hogwarts students</div>
            </div>
          </div>
          <div className = "cont_link_stuff">
            <div className = "link" onClick = {() => stuff()}>
              <div className = "text_link">Hogwarts stuff</div>
            </div>
          </div>
        </div>
        <Menu active = {menuActive} setActive = {setMenuActive} items = {items}/>

        <Char_search n = {n} active = {charSearchActive} setActive = {setCharSearchActive}/>

        <CharSearch active = {charSearchActive} setActive = {setCharSearchActive}/>


      </>
    );   
};

export default Characters;