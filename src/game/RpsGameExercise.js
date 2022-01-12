import React, { Component } from 'react';
import './style.css';
import Player from './Player';
import Opponent from './Opponent';
import Result from './Result';
import {connect} from 'react-redux';
class RpsGameExercise extends Component {
  render() {

    return (
      <div className="game">
        <div className="row text-center mt-5">
          <div className="col-4">
              <Player/>
          </div>
          <div className="col-4">
            <Result/>
            <button onClick={()=>{this.props.playGame()}} className="btn btn-success display-4 mt-5 p-2">Play Game</button>
          </div>
          <div className="col-4">
              <Opponent/>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    playGame: () => {
      let count= 0;
      let randomChosen = setInterval(() =>{
        dispatch({
          type: 'PLAY_RANDOM'
        })
        count ++;
        if (count >= 10){
          clearInterval(randomChosen);

          dispatch({
            type: 'END_GAME'
          })
        }
      },100)
    }
  }
}

export default connect(null,mapDispatchToProps)(RpsGameExercise)