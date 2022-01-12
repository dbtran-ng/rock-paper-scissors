import React, { Component } from 'react'
import {connect} from 'react-redux'
class Result extends Component {
    render() {
        return (
            <div>
                <div className="display-4 text-warning">
                    {this.props.result}
                </div>
                <div className="display-4 text-success">
                    Total Wins: <span className="text-warning">{this.props.win}</span>
                </div>
                <div className="display-4 text-success">
                    Total Matches: <span className="text-warning">{this.props.matches}</span>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        result: state.RpsReducer.result,
        win: state.RpsReducer.win,
        matches: state.RpsReducer.matches
    }
}

export default connect(mapStateToProps)(Result)