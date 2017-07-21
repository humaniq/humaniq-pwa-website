import React , { Component } from 'react';
import './styles.scss';
import {cssClassName} from 'utils';
const cn = cssClassName('O_Search');
import A_Container from 'A_Container';
import A_H from 'A_H';


class O_Search extends Component {
  state = {
    active: false
  }
  render() {
    const { active } = this.state;
    return (
      <div>
        <A_Container type='wide'>
          <A_H type='search wiki-title'>Welcome to Humaniq wiki</A_H>
          <form action="" className={cn(`search ${ active ? 'o-search__input--focused': '' }`)}>
            <input
              type="text"
              className={cn('input')}
              placeholder="Search any transaction"
              onFocus={() => this.setState({ active: true })}
              onBlur={() => this.setState({ active: false })}
            />
            <button className={cn('submit')}>
              <svg className={cn('search-icon')} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19 19">
                <g fill="none" transform="translate(-1 -1)">
                  <path fill="none" d="M0 0h20v20H0z"/>
                  <path className={cn('icon-path')} d="M13.54 12.2l-1.429 1.4 4.906 4.907a.995.995 0 0 0 1.418.003.997.997 0 0 0 0-1.414L13.539 12.2z"/>
                  <circle className={cn('icon-circle')} cx="8" cy="8" r="6.5"/>
                </g>
              </svg>
            </button>
          </form>
        </A_Container>
      </div>
    )
  }
}


O_Search.propTypes = {};

export default O_Search