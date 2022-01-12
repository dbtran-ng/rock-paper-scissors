import React, { Component } from 'react';
import { connect } from 'react-redux';
class Player extends Component {
  render() {
    return (
      <div className="text-center player">
        <div className="think">
          <img
            style={{ width: 100, height: 150 }}
            src={this.props.chosenOptions.find(item=>item.chosen === true).hinhAnh}
            alt="chosenOptions"
          />
        </div>
        <div className="speech-bubble"></div>
        <img
          style={{ width: 250, height: 250 }}
          src="./img/player.png"
          alt="player"
        />
        <div className="row">
          {this.props.chosenOptions.map((item, index) => {
            let border = null;
            if ( item.chosen){
              border = { border:'3px solid orange' };
            }
            return (
              <div className="col-4">
                <button onClick={()=>{this.props.playGame(item.ma)}} style={border} className="btnItem">
                  <img
                    style={{ width: 50, height: 60 }}
                    src={item.hinhAnh}
                    alt={item.hinhAnh}
                  />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    chosenOptions: state.RpsReducer.options,
  };
};

const mapDispatchToProps = (dispatch) =>{
  return {
    playGame : (ma) => {
      dispatch ({
        type: 'CHOSE_OPTIONS',
        ma
      })
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Player);
