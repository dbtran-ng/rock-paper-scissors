import React, { Component } from 'react';
import { connect } from 'react-redux';
class Opponent extends Component {
  render() {
    let keyframe = `@keyframes randomItem${Date.now()} {
      0% {top: -50px;}
      25% {top: 100px;}
      50% {top: -50px;}
      75% {top: 100px;}
      100% {top: 0;}
    }`;

    return (
      <div className="text-center player">
        <style>{keyframe}</style>
        <div className="think" style={{ position: 'relative' }}>
          <img
            style={{
              position: 'absolute',
              left: '10%',
              animation: `randomItem${Date.now()} 0.5s`,
              transform: 'rotateY(175deg)',
              width: 100,
              height: 150,
            }}
            src={this.props.opponent.hinhAnh}
            alt="chosenOptions"
          />
        </div>
        <div className="speech-bubble"></div>
        <img
          style={{ width: 250, height: 250 }}
          src="./img/playerComputer.png"
          alt="opponent"
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    opponent: state.RpsReducer.opponent,
  };
};
export default connect(mapStateToProps)(Opponent);
