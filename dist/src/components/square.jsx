import React from "react";
import styles from '../assets/sass/modules/app.module.scss'
import { Join } from "../assets/util/JoinClasses";

export default function Square(){
    const [value, setValue] = React.useState(null)
    function HandleChange(){
        setValue('X')
    }

    return (
        <button 
            className={Join([styles.square, styles['font-size-2_5rem']])}
            onClick={HandleChange}
        >
            {value}
        </button>
    )
}