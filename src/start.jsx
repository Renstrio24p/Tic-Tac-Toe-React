import React from 'react';
import styles from './assets/sass/modules/app.module.scss';
import { Join } from './assets/util/JoinClasses';
import Square from './components/square';

export default function Start() {
    document.title = 'Tik Tac Toe' // document title for this project

    // useState

    const [squares, setSquares] = React.useState(Array(9).fill(null))
    const [resets,setResets] = React.useState(false)

    function ToReset(){
        
    }

	return (
		<div className={Join([styles['d-flex-center'], styles['flex-direction-column']])}>
            <h1 className={Join([styles['font-weight-400'], styles['pad-20']])}>Tic Tac Toe</h1>
            <button 
                className={Join([styles['pad-5'], styles['m-5']])}
                onClick={ToReset}
            >Reset</button>
			<div className={styles.boardrows}>
                <Square values={squares[0]} />
                <Square values={squares[1]} />
                <Square values={squares[2]} />
			</div>
			<div className={styles.boardrows}>
                <Square values={squares[3]} />
                <Square values={squares[4]} />
                <Square values={squares[5]} />
			</div>
			<div className={styles.boardrows}>
                <Square value={squares[6]} />
                <Square value={squares[7]} />
                <Square value={squares[8]} />
			</div>
		</div>
	);
}
// this will serve as the APP.JS
