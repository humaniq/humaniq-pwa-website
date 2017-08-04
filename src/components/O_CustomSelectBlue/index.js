import React , { Component } from 'react';
import './styles.scss';
import {cssClassName} from 'utils';
const cn = cssClassName('O_CustomSelectBlue');

const links = [
  'User Terms of Service',
  'Customer Terms of Service',
  'General Privacy Policy',
  'Data Privacy'
];

class O_CustomSelectBlue extends Component {
  state = {
    isOpen: false,
    activeLink: null,
  };

  toggleMenu = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  closeMenu = () => {
    this.setState({ isOpen: false });
  };

  handleSelectLink = (link) => {
    this.setState({ activeLink: link });
    this.closeMenu();
  };

  render() {
    const { isOpen, activeLink } = this.state;
    const renderedLinks = links.map(link => (
      <li className={cn('menu-li')} onClick={() => this.handleSelectLink(link)}>
        <a href="#" className={cn('menu-a')}>{link}</a>
      </li>
    ));
    return (
      <div className={cn('menu', { active: true })}>
        <button className={cn('menu-bt')} onClick={this.toggleMenu} >
          {activeLink || links[0]}
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

O_CustomSelectBlue.propTypes = {};

export default O_CustomSelectBlue