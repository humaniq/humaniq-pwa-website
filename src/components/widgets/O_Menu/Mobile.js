import React , { Component } from 'react';
import './styles.scss';
import {cssClassName} from 'utils';
const cn = cssClassName('O_MenuMobile');
import {Link} from 'react-router';
import onClickOutside from 'react-onclickoutside'

class O_MenuMobile extends Component {
  state = {
    isOpen: false,
    activeTitle: this.initialActiveTitle(this.props),
  };

  handleClickOutside = () => {
    this.closeMenu()
  }

  initialActiveTitle(props){
    const {options} = props
    const active = options.filter(option => option.isSelected)[0]
    return (active ? active.text : options[0].text)
  }

  toggleMenu = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  closeMenu = () => {
    this.setState({ isOpen: false });
  };

  componentWillReceiveProps(nextProps){
    const activeTitle = this.initialActiveTitle(nextProps)
    const oldActiveTitle = this.state.activeTitle
    if(activeTitle !== oldActiveTitle){
      this.setState({activeTitle})
    }
  }

  render() {
    const { isOpen, activeTitle } = this.state;
    const {options, title} = this.props

    const renderedLinks = options.map(({text, url, isSelected}, i) => (
      <li className={cn('menu-li')} key={'key_' + i}>
        {
          isSelected
            ? <div className={cn('menu-a')}>{text}</div>
            : <span className={cn('menu-a')} onClick={() => this.closeMenu()}><Link to={url}>{text}</Link></span>
        }
      </li>
    ));
    return (
      <div className={cn('menu')}>
        <button className={cn('menu-bt')} onClick={this.toggleMenu} >
          {title || activeTitle}
          <svg className={cn('menu-icon', { active: isOpen  })} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 6">
            <path d="M5 0l4 5H1z"/>
          </svg>
        </button>
        {
          isOpen &&
          <ul className={cn('menu-list')}>
            {renderedLinks}
          </ul>
        }
      </div>
    )
  }
}

O_MenuMobile.propTypes = {};

export default onClickOutside(O_MenuMobile)