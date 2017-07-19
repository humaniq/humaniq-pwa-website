import React, {Component as ReactComponent} from 'react'

export default (Component) => class RipleHOC extends ReactComponent {
  state = {
    cursorPos: {}
  }


  handleClick(e){
    this.props.onClick(e)
    let cursorPos = {
      top: e.clientY,
      left: e.clientX,
      time: Date.now()
    }
    this.setState({ cursorPos: cursorPos })

  }

  render() {
    return <Component {...this.props}
                      cursorPos={this.state.cursorPos}
                      onClick={this.openItem}
    />
  }
}