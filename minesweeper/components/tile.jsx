import React from 'react';

export default class Tile extends React.Component {
    constructor(props) {
        super(props);
        this.updateGame = props.updateGame.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event){
        event.preventDefault();
        this.updateGame(this.props.tile, event.altKey);
    }
    
    render () {
        let bombCount = this.props.tile.adjacentBombCount();
        let status;
        if (this.props.tile.explored && this.props.tile.bombed) {
            status = "bombed";
        } else if (this.props.tile.flagged) {
            status = "flagged";
        } else if (this.props.tile.explored) {
            status = "explored";
        }
        return (
            //add onClick
            <div onClick={this.handleClick} className={"tile " + (status ? status : "")} >{status === "explored" && bombCount > 0 ? bombCount.toString() : ""}</div>
        );
    }
}