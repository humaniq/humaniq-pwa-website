import React, { Component } from 'react';
import O_Transaction from 'O_Transaction';

class O_HmqContentPlaceholder extends Component{

  getPlaceholders(layout, amount) {

    let placeholders = [];

    for(let i = 0; i <= amount; i++) {
      let newPlaceholder = () => (
        <O_Transaction
          key = {i + 1}
          type = 'contentPlaceholder'
          layout = {layout}
          onTop = {i === 0}/>
      );
      placeholders = [...placeholders, newPlaceholder()];
    }

    return placeholders
  }

  render() {
    const {layout, amount} = this.props;

    return (
      <div>
        {this.getPlaceholders(layout, amount)}
      </div>
    )
  }
}
export default O_HmqContentPlaceholder
