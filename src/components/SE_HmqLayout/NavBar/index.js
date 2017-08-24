import React, { Component } from 'react';
import * as T from "prop-types";
import './styles.scss';
import {cssClassName} from 'utils'
const cn = cssClassName('SE_HmqLayoutNavBar')
import A_Container from 'A_Container';
import A_Link from 'A_Link'

class SE_HmqLayoutNavBar extends Component {

  state = {
    inActive: !!this.props.value,
    value: this.props.value || ''
  }

  onSubmit = (e) => {
    e.preventDefault()
    const {value} = this.state
    if (value) {
      this.props.handleSubmit(value)
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      value: nextProps.value || '',
      inActive: !!nextProps.value
    })
  }

  getLinks(menu){
    const links = menu.map(({title, url, active}, i) => (
      <li className={cn('nav-li')} key={"key_" + i}>
        <A_Link
          className={cn('nav-a', { active})}
          to={url}
        >{title}
        </A_Link>
      </li>
    ))
    return(
      <ul className={cn('nav-list')}>
        {links}
      </ul>
    )
  }
  render() {
    const { menu, hideSearch } = this.props;
    const { /* inActive, */ value} = this.state;

    const renderedLinks = this.getLinks(menu)
    return (
      <div className={cn('navigation')}>
        <A_Container>
          <div className={cn('flex-nav')}>
            <nav className={cn('nav')}>
              <ul className={cn('nav-list')}>
                {renderedLinks}
              </ul>
            </nav>
            {
              hideSearch ||
                <form action="" className={cn('search-form')} onSubmit={this.onSubmit} >
                  <input type="text"
                         className={cn('search-input')}
                         placeholder="Search TxHash or Address"
                         value={value}
                         onChange={e => this.setState({value: e.target.value})}
                         onFocus={() => this.setState({inActive: true})}
                         onBlur={() => this.setState({inActive: false})}
                  />
                  <button className={cn('search-icon')} type="submit"></button>
                </form>
            }

          </div>
        </A_Container>
      </div>
    )
  }
}

SE_HmqLayoutNavBar.propTypes = {
  menu: T.array.isRequired,
  hideSearch: T.bool.isRequired
};

SE_HmqLayoutNavBar.defaultProps = {
}

export default SE_HmqLayoutNavBar