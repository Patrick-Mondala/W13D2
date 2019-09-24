import React from 'react';
import Tile from './tile';

export default class Board extends React.Component {
    //was using {board, updateGame}
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div id="board">
                {this.props.board.grid.map((row, rowIdx) => (
                    <div className="row" key={rowIdx}>
                        {row.map((tile, colIdx) => (
                            //maybe put rowidx on tile props
                            <Tile tile={tile} key={`${rowIdx},${colIdx}`} updateGame={this.props.updateGame}/>
                        ))}
                    </div>
                ))}
            </div>
        )
    }
    
}