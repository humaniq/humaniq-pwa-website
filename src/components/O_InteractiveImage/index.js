import React, {Component} from 'react';
// import * as T from "prop-types";
import './styles.scss';
import A_Image from 'A_Image'
import onClickOutside from 'react-onclickoutside'
import A_ButtonLink from 'A_ButtonLink'
import {cssClassName} from 'utils'

const cn = cssClassName('O_InteractiveImage')

class O_InteractiveImage extends Component {
  state = {
    isOpened: false
  };

  handleClickOutside = () => {
    this.setState({isOpened: false})
  };

  handlePopupOpen = (e) => {
    const element = e.currentTarget;
    if (!element.classList.contains('invert') && element.offsetLeft < 100) {
      element.className += ' invert';
    }
    this.setState({isOpened: true});
  };

  render() {
    const {entity} = this.props;
    const {isOpened} = this.state;
    return (
      <div className={cn()} onClick={this.handlePopupOpen}>
        <A_Image src={entity.logo}/>
        <div className={cn('popup', {isOpened})}>
          <div className={cn('popup-title')}>{entity.title}</div>
          <div className={cn('popup-tag')}>{entity.category}</div>
          <div className={cn('popup-description')}>{entity.description}</div>
          <A_ButtonLink size="xs" to={entity.url} color="secondary_dark">Visit</A_ButtonLink>
        </div>
      </div>
    )
  }
}

O_InteractiveImage.propTypes = {};

export default onClickOutside(O_InteractiveImage)
