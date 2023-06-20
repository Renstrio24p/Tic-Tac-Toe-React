import React from 'react';
import styles from './assets/sass/modules/app.module.scss';
import { Join } from './assets/util/JoinClasses';
import Square from './components/square';

export default function Start() {
    document.title = 'Tik Tac Toe' // document title for this project

    // useState

    const [squares, setSquares] = React.useState(Array(9).fill(null))
	return (
		<div className={Join([styles['d-flex-center'], styles['flex-direction-column']])}>
            <h1>Tic Tac Toe</h1>
			<div className={styles.boardrows}>
                <Square value={squares[0]} />
                <Square value={squares[0]} />
                <Square value={squares[0]} />
			</div>
			<div className={styles.boardrows}>
                <Square value={squares[0]} />
                <Square value={squares[0]} />
                <Square value={squares[0]} />
			</div>
			<div className={styles.boardrows}>
                <Square value={squares[0]} />
                <Square value={squares[0]} />
                <Square value={squares[0]} />
			</div>
		</div>
	);
}
// this will serve as the APP.JS
