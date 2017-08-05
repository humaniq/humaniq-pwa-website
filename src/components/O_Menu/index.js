import React, { Component } from 'react';
import * as T from "prop-types";
import './styles.scss';
import {cssClassName, convert} from 'utils'
const cn = cssClassName('O_Menu')
import {safeDA} from "utils/index"

class O_Menu extends Component {
  state = {
    stickyMenu: false,
  };

  componentDidMount() {
    document.addEventListener('scroll', this.checkVisibleSection);
    this.forceUpdate()

  }

  componentWillUnmount() {
    document.removeEventListener('scroll', this.checkVisibleSection);
  }

  getMenuOptions(articles) {
    return articles.map(a => ({
      anchor: convert.toCleanKebab(a.title),
      text: a.title,
    }))
  }

  checkVisibleSection = () => {
    if (this.state.stickyMenu && (document.body.scrollTop < this.helperNode.getBoundingClientRect().top)) {
      this.setState({stickyMenu: false})
    } else if (!this.state.stickyMenu && (document.body.scrollTop > this.helperNode.getBoundingClientRect().top)) {
      this.setState({stickyMenu: true})
    }

  };

  render() {
    return (
      <div>
        тут текст
      </div>
    )
  }
}

O_Menu.propTypes = {
};

O_Menu.defaultProps = {
}

export default O_Menu


// import React from 'react';
// import * as T from "prop-types";
// import Desktop from './Desktop'
//
// const O_MenuDesktop = ({ options, selected, rootLink, stickyMenu, type }) => {
//   const _options = options.map(({ anchor, text }) => {
//     const isSelected = selected === anchor;
//     return ({
//       text,
//       url: rootLink + anchor,
//       isSelected
//     })
//   });
//
//   return (
//     <div>тут меню</div>
//   )
//
//   //
//   // console.log( options, selected, rootLink, stickyMenu, type)
//   // switch(type){
//   //   case 'desktop':
//   //     return <Desktop {...{options: _options, stickyMenu}} />
//   //   case 'mobile':
//   //     return <Desktop {...{options: _options, stickyMenu}} />
//   //
//   // }
// };
//
//
// O_MenuDesktop.propTypes = {
//   options: T.arrayOf(T.shape({
//     anchor: T.string,
//     text: T.string.isRequired,
//   })),
//   type: T.oneOf([
//     'desctop', //shows on desctop
//     'mobile' //shows on mobile
//   ]),
//   rootLink: T.string.isRequired,
//   selected: T.string.isRequired,
//   stickyMenu: T.bool.isRequired
// };
//
// O_MenuDesktop.defaultProps = {
//   options: [],
//   selected: '',
// };
//
// export default O_MenuDesktop