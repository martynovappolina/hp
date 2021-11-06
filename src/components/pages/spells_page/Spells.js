import React, {useState} from "react";
import $ from 'jquery';
import Menu from '../../../components/menu/menu';

import "../../../background.css"
import './Spells.css'

const Spells = () => {
    const [menuActive, setMenuActive] = useState(false);
    const items = [{ value: "a", href: './main', icon: "" },
    { value: "b", href: './main', icon: "" },
    { value: "c", href: './main', icon: "" },
    { value: "d", href: './main', icon: "" }
    ]

    var i = 1;
    $('.spell').on("dblclick", ( function() {
        if(i%2 === 0) { 
            $(this).find('.card_spell').removeClass('flip_spell')
            i++;
        } 
        else {
            $(this).find('.card_spell').addClass('flip_spell');
            i--;
        }
    }))

    return(
        <>
            <div className = "background">
                <div className = "burger" onClick = {() => setMenuActive(!menuActive) }></div>
                <div className = "spells_title">Spells</div>

                <div className = "spells_main_container">
                    <div className = "spell">
                        <div className = 'card_spell'>
                            <div className = 'side_spell front_spell'></div>
                            <div className = 'side_spell back_spell'></div>   
                        </div>
                    </div>
                    <div className = "spell">
                        <div className = 'card_spell'>
                            <div className = 'side_spell front_spell'></div>
                            <div className = 'side_spell back_spell'></div>   
                        </div>
                    </div>
                    <div className = "spell">
                        <div className = 'card_spell'>
                            <div className = 'side_spell front_spell'></div>
                            <div className = 'side_spell back_spell'></div>   
                        </div>
                    </div>
                    <div className = "spell">
                        <div className = 'card_spell'>
                            <div className = 'side_spell front_spell'></div>
                            <div className = 'side_spell back_spell'></div>   
                        </div>
                    </div>
                    <div className = "spell">
                        <div className = 'card_spell'>
                            <div className = 'side_spell front_spell'></div>
                            <div className = 'side_spell back_spell'></div>   
                        </div>
                    </div>
                </div>

            </div>

            <Menu active = { menuActive} setActive = {setMenuActive} items = { items}/> 
        </>
    )
}

export default Spells