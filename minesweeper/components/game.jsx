import React from 'react';
import * as Minesweeper from '../minesweeper';
import Board from './board';

export default class Game extends React.Component {
    constructor(props) {
        super(props);
        //maybe put gridSize and numBombs
        this.state = { board: new Minesweeper.Board() }
        this.updateGame = this.updateGame.bind(this);
        this.modal = this.modal.bind(this);
        this.resetGame = this.resetGame.bind(this);
    }

    updateGame(tile, flag) {
        if (flag) {
            tile.toggleFlag();
        } else {
            tile.explore();
        }
        this.setState({});
    }

    resetGame(){
        let newBoard = new Minesweeper.Board();
        this.setState({ board: newBoard });
        console.log("not resetting");
    }

    modal() {
        if (this.state.board.won()){
            return (
                <div className="modal-screen">
                    <div className="modal-content">
                        <section className="modal is-active">
                            <p>You won!</p>
                            <button onClick={this.resetGame}>Play Again</button>
                        </section>
                    </div>
                </div>
            )
        } else if (this.state.board.lost()) {
            return (
                <div className="modal-screen">
                    <div className="modal-content">
                        <section className="modal is-active">
                            <p>Aw snap!</p>
                            <button onClick={this.resetGame}>Play Again</button>
                        </section>
                    </div>
                </div>
            )
        } else {
            return ""
        }
    }

    render() {
        console.log("from game")
        console.log(this.state.board);
        return (
            <div>
            <Board board={this.state.board} updateGame={this.updateGame} />
            <this.modal />
            </div>
        )
    }
}