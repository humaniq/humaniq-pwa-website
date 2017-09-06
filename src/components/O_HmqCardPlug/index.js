import React, { Component } from 'react';
import O_Transaction from 'O_Transaction';

class O_HmqCardPlug extends Component{

  buildPlugs(amount) {
    let plugs = [];
    for(let i = 0; i <= amount; i++) {
      let plug = () => (
        <O_Transaction key = {i + 1} type="plug" onTop = {i === 0}/>
      );
      plugs = [...plugs, plug()];
    }
    return plugs
  }

  render() {
    const {amount} = this.props;

    return (
      <div>
        {this.buildPlugs(amount)}
      </div>
    )
  }
}
export default O_HmqCardPlug
