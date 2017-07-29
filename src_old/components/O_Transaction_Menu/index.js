import React , { Component } from 'react';
import './styles.scss';
import A_Container from 'A_Container';
import O_Search from 'O_Search';
import {cssClassName} from 'utils';
const cn = cssClassName('O_Transaction_Menu');


class O_Transaction_Menu extends Component {

  render() {
    return (
      <div>
        <A_Container type='wide'>

            <ul className={cn('ul')}>
              <li><a href="#">Transaction Log</a></li>
              <li><a href="#">Token Holders</a></li>
              <li><a href="#">Markets</a></li>
            </ul>
          
        </A_Container>
      </div>
    )
  }
}


O_Transaction_Menu.propTypes = {};

export default O_Transaction_Menu