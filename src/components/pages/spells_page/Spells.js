import React, { useState } from "react";
import $ from 'jquery';
import Menu from '../../../components/menu/menu';

import "../../../background.css"
import './Spells.css'

import accio_mp4 from './video_spells/Accio.mp4'
import accio_webm from './video_spells/Accio.webm'
import WingardiumLeviosa_mp4 from './video_spells/WingardiumLeviosa.mp4'
import WingardiumLeviosa_webm from './video_spells/WingardiumLeviosa.webm'
import Orchideous_mp4 from './video_spells/Orchideous.mp4'
import Orchideous_webm from './video_spells/Orchideous.webm'
import LumosSolem_mp4 from './video_spells/LumosSolem.mp4'
import LumosSolem_webm from './video_spells/LumosSolem.webm'
import LumosMaxima_mp4 from './video_spells/LumosMaxima.mp4'
import LumosMaxima_webm from './video_spells/LumosMaxima.webm'
import Reparo_mp4 from './video_spells/Reparo.mp4'
import Reparo_webm from './video_spells/Reparo.webm'
import Riddikulus_mp4 from './video_spells/Riddikulus.mp4'
import Riddikulus_webm from './video_spells/Riddikulus.webm'
import Protego_mp4 from './video_spells/Protego.mp4'
import Protego_webm from './video_spells/Protego.webm'
import Expelliarmus_mp4 from './video_spells/Expelliarmus.mp4'
import Expelliarmus_webm from './video_spells/Expelliarmus.webm'
import Episkey_mp4 from './video_spells/Episkey.mp4'
import Episkey_webm from './video_spells/Episkey.webm'


const Spells = () => {
    const [menuActive, setMenuActive] = useState(false);
    const items = [{ value: "a", href: './main', icon: "" },
        { value: "b", href: './main', icon: "" },
        { value: "c", href: './main', icon: "" },
        { value: "d", href: './main', icon: "" }
    ]

    const spells = [{
            "id": 1,
            "spell": "Accio",
            "use": "Summoning charm",
            "video_mp4": accio_mp4,
            "video_webm": accio_webm
        },
        {
            "id": 2,
            "spell": "Wingardium Leviosa/Locomotor",
            "use": "Levitates objects",
            "video_mp4": WingardiumLeviosa_mp4,
            "video_webm": WingardiumLeviosa_webm
        },
        {
            "id": 3,
            "spell": "Lumos solem",
            "use": "Produces a blinding flash of sunlight",
            "video_mp4": LumosSolem_mp4,
            "video_webm": LumosSolem_webm
        },
        {
            "id": 4,
            "spell": "Lumos maxima",
            "use": "Produces a blinding flash of bright white light from the tip of the wand",
            "video_mp4": LumosMaxima_mp4,
            "video_webm": LumosMaxima_webm
        },
        {
            "id": 5,
            "spell": "Reparo",
            "use": "Repairs broken objects",
            "video_mp4": Reparo_mp4,
            "video_webm": Reparo_webm
        },
        {
            "id": 6,
            "spell": "Riddikulus",
            "use": "Transforms Boggarts into a humorous shape",
            "video_mp4": Riddikulus_mp4,
            "video_webm": Riddikulus_webm
        },
        {
            "id": 7,
            "spell": "Orchideous",
            "use": "Grows flowers from end of wand",
            "video_mp4": Orchideous_mp4,
            "video_webm": Orchideous_webm
        },
        {
            "id": 8,
            "spell": "Protego",
            "use": "Shields caster from curses",
            "video_mp4": Protego_mp4,
            "video_webm": Protego_webm
        },
        {
            "id": 9,
            "spell": "Expelliarmus",
            "use": "Disarming Charm",
            "video_mp4": Expelliarmus_mp4,
            "video_webm": Expelliarmus_webm
        },
        {
            "id": 10,
            "spell": "Episkey",
            "use": "Heals minor injuries",
            "video_mp4": Episkey_mp4,
            "video_webm": Episkey_webm
        },
    ]

    //видео воспроизводится при наведении курсора:
    $("body").on("mouseover", "video", function() {
        this.play();
        $(this).css("background-color", "black");
    });
    $("body").on("mouseleave", "video", function() {
        this.pause();
    })

    function scroll_spells() {
        var block = document.getElementsByClassName('spells_main_container');

        var contentHeight = $(".spell").outerWidth() * 10 // высота блока контента 
        var startContentHeight = contentHeight;
        var yOffset = $(".spells_main_container").scrollTop(); // текущее положение скролбара

        if (yOffset >= contentHeight + 500) {
            $('spells_main_container').append('<div>hello</div>');
            contentHeight += startContentHeight;
            console.log('hello');
        }
    }

    return ( 
    <>
        <div className = "background">
            <div className = "burger" onClick = {() => setMenuActive(!menuActive) } > </div> 
            <div className = "spells_title" > Spells </div>

            <div className = "spells_main_container" onScroll = {() => scroll_spells() } > {
                spells.map(spell => ( 
                    <div className = "spell">
                        <div className = 'card_spell'>
                            <div className = 'side_spell front_spell'>
                                <video className = "video_spell" loop>
                                    <source src = { spell.video_webm + "#t=0.7"} type = "video/webm"/>
                                    <source src = { spell.video_mp4 + "#t=0.7"} type = "video/mp4"/>
                                </video> 
                                <div className = "text_spell"> { spell.spell } </div> 
                                <div className = "text_use" > { spell.use } </div> 
                            </div>  
                        </div> 
                    </div>
                ))
            }

            </div>
        </div>

        <Menu active = { menuActive } setActive = { setMenuActive } items = { items }/>  
        </>
    )
}

export default Spells