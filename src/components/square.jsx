import React from "react";
import styles from '../assets/sass/modules/app.module.scss'
import { Join } from "../assets/util/JoinClasses";

export default function Square({value}){
    const [val, setVal] = React.useState(null)

    function HandlerClick(){
        setVal('X')
    }

    return (
        <button 
            className={Join([styles.square, styles['font-size-2_5rem']])}
            onClick={HandlerClick}
            // val={value}
        >
            {val}
        </button>
    )
}