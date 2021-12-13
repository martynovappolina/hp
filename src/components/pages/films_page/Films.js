import React, {useState} from "react";
import $ from 'jquery';
import Menu from '../../../components/menu/menu';

import "../../../background.css"
import './Films.css'

import film1_png from '../../../imgs/film1.png'
import film1_mp4 from './video/film1.mp4'
import film1_webm from './video/film1.webm'

import film2_png from '../../../imgs/film2.png'
import film2_mp4 from './video/film2.mp4'
import film2_webm from './video/film2.webm'

import film3_png from '../../../imgs/film3.png'
import film3_mp4 from './video/film3.mp4'
import film3_webm from './video/film3.webm'

import film4_png from '../../../imgs/film4.png'
import film4_mp4 from './video/film4.mp4'
import film4_webm from './video/film4.webm'

import film5_png from '../../../imgs/film5.png'
import film5_mp4 from './video/film5.mp4'
import film5_webm from './video/film5.webm'

import film6_png from '../../../imgs/film6.png'
import film6_mp4 from './video/film6.mp4'
import film6_webm from './video/film6.webm'

import film7_png from '../../../imgs/film7.png'
import film7_mp4 from './video/film7.mp4'
import film7_webm from './video/film7.webm'

import film8_png from '../../../imgs/film8.png'
import film8_mp4 from './video/film8.mp4'
import film8_webm from './video/film8.webm'

const Films = () => {

    const [menuActive, setMenuActive] = useState(false);
    const items = [{ value: "a", href: './main', icon: "" },
    { value: "b", href: './main', icon: "" },
    { value: "c", href: './main', icon: "" },
    { value: "d", href: './main', icon: "" }
]

$("body").on("mouseover", "video", function(){
  this.play();
  $( this ).css( "background-color", "black" );
});
$("body").on("mouseleave", "video", function(){
  this.load();
})

    return(
        <>
            <div className = "background">
                <div className = "burger" onClick = {() => setMenuActive(!menuActive) }></div>
                <div className = "films_title">Films</div>
                <div className = "films_main_block">
                    <a href = 'https://www.kinopoisk.ru/film/689/' rel="noreferrer" target="_blank">
                        <video poster = {film1_png} className = "films_el film_one" loop>
                            <source src = {film1_webm} type = "video/webm"/>
                            <source src = {film1_mp4} type = "video/mp4"/>
                        </video>
                    </a>
                    <a href = 'https://www.kinopoisk.ru/film/688/' rel="noreferrer" target="_blank">
                        <video poster = {film2_png} className = "films_el film_two" loop>
                            <source src = {film2_webm} type = "video/webm"/>
                            <source src = {film2_mp4} type = "video/mp4"/>
                        </video>
                    </a>    
                    <a href = 'https://www.kinopoisk.ru/film/322/' rel="noreferrer" target="_blank">    
                        <video poster = {film3_png} className = "films_el film_three" loop>
                            <source src = {film3_webm} type = "video/webm"/>
                            <source src = {film3_mp4} type = "video/mp4"/>
                        </video>
                    </a>
                    <a href = 'https://www.kinopoisk.ru/film/8408/' rel="noreferrer" target="_blank">
                        <video poster = {film4_png} className = "films_el film_four" loop>
                            <source src = {film4_webm} type = "video/webm"/>
                            <source src = {film4_mp4} type = "video/mp4"/>
                        </video>
                    </a>
                    <a href = 'https://www.kinopoisk.ru/film/48356/' rel="noreferrer" target="_blank">    
                        <video poster = {film5_png} className = "films_el film_five" loop>
                            <source src = {film5_webm} type = "video/webm"/>
                            <source src = {film5_mp4} type = "video/mp4"/>
                        </video>
                    </a>
                    <a href = 'https://www.kinopoisk.ru/film/89515/' rel="noreferrer" target="_blank">    
                        <video poster = {film6_png} className = "films_el film_six" loop>
                            <source src = {film6_webm} type = "video/webm"/>
                            <source src = {film6_mp4} type = "video/mp4"/>
                        </video>
                    </a>
                    <a href = 'https://www.kinopoisk.ru/film/276762/' rel="noreferrer" target="_blank">    
                        <video poster = {film7_png} className = "films_el film_seven" loop>
                            <source src = {film7_webm} type = "video/webm"/>
                            <source src = {film7_mp4} type = "video/mp4"/>
                        </video>
                    </a>
                    <a href = 'https://www.kinopoisk.ru/film/407636/' rel="noreferrer" target="_blank">    
                        <video poster = {film8_png} className = "films_el film_eight" loop>
                            <source src = {film8_webm} type = "video/webm"/>
                            <source src = {film8_mp4} type = "video/mp4"/>
                        </video>
                    </a>    
                </div>
                <div className = "click_to_watch" style = {{fontSize: 2 + "vh"}}>click to watch the movie </div>
            </div> 

            <Menu active = { menuActive} setActive = {setMenuActive} items = { items}/> 
        </>
    )
}

export default Films