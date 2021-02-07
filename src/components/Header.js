import React from 'react';
import Stats from "./Stats";
import Stopwatch from "./Stopwatch";

class Header extends React.Component {
  state = {
    isShowStopwatch: true
  }

  handleClickTitle = () => {
    this.setState({
      isShowStopwatch: false
    });
  }

  render() {
    return (
      <header>
        <Stats players={this.props.players}/>
        <h1 onClick={this.handleClickTitle}>{this.props.title}</h1>
        {this.state.isShowStopwatch ? <Stopwatch/> : null}
      </header>
    );
  }
}

export default Header;