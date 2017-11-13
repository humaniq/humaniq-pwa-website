import React, { Component } from 'react'
import * as T from 'prop-types'
import A_Title from 'A_Title_H'
import './styles.scss'
import { cssClassName } from 'utils'

const cn = cssClassName('M_InfoColumn')

class M_InfoColumn extends Component {
  state = {
    needWidth: typeof this.props.setWidth === 'function',
  }

  componentDidMount() {
    if (this.state.needWidth) {
      window.addEventListener('resize', this.setWidth)
      this.setWidth()
    }
  }

  componentWillUnmount() {
    if (this.state.needWidth) {
      window.removeEventListener('resize', this.setWidth)
    }
  }

  setWidth = () => {
    this.props.setWidth(this.node.offsetWidth)
  }

  render() {
    const { mix, column } = this.props
    const { needWidth } = this.state
    return (
      <div className={cn([mix])} ref={needWidth ? node => (this.node = node) : undefined}>
        {column.imageSrc ? <img className={cn('image')} src={column.imageSrc} /> : null}

        <A_Title mix={cn('title')} type="info-column" theme="dark">
          {column.title}
        </A_Title>
        <p className={cn('text')}>{column.text}</p>
      </div>
    )
  }
}

M_InfoColumn.propTypes = {
  mix: T.string, //BEM mixin from parent block
  column: T.object.isRequired, //Column to render
}

export default M_InfoColumn
