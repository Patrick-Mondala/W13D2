import React from 'react';
import ReactDOM from 'react-dom';

import Game from './components/game';
// import Tile from './components/tile'
// import Board from './components/board'

window.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("main");
    ReactDOM.render(<Game />, root);
});