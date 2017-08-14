import React, { Component } from 'react';
import * as T from "prop-types";
import O_Fixed from 'O_Fixed'
import Desktop from './Desktop'
import Mobile from './Mobile'

class O_Menu extends Component {

  render() {
    const {type, ...props} = this.props
    switch (type){
      case 'desktop':
        return (
          <O_Fixed>
            <Desktop {...props} />
          </O_Fixed>
        )
      case 'mobile':
        return (
          <O_Fixed>
            <Mobile {...props} />
          </O_Fixed>
        )
    }

  }
}

O_Menu.propTypes = {
  type: T.oneOf([
    'desktop', // simple menu, used on legal page
    'mobile', // simple menu, used on legal page
  ]).isRequired,
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