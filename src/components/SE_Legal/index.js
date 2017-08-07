import React, {Component} from 'react';
import T from "prop-types";
import './styles.scss';
import { cssClassName, convert, safeDA } from 'utils'
import A_Container from 'A_Container'
// import O_CustomSelectBlue from 'O_CustomSelectBlue'
import O_Hero from 'O_Hero'

import A_H from 'A_H'
import A_P from 'A_P'
import Meta from './meta'
import LegalSection from './O_LegalSection/index'
import O_Menu from 'O_Menu/index'
const cn = cssClassName('SE_Legal');

const spaceTop = 60

class SE_Legal extends Component {
  state = {
    selected: safeDA(this.props, ['articles', 0, 'anchor']),
  };

  componentDidMount() {
    document.addEventListener('scroll', this.checkVisibleSection);
    this.forceUpdate()

  }

  componentWillUnmount() {
    document.removeEventListener('scroll', this.checkVisibleSection);
  }

  checkVisibleSection = () => {

    const anchors = this.props.articles.map(a => convert.toCleanKebab(a.title));
    let firstSectionOffset;
    let minimalNegativeOffset = 0;
    let { visibleSection } = this.state;

    anchors.forEach(anchor => {
      const distanceScrolled = document.body.scrollTop + spaceTop;
      const elemViewportOffset = this[anchor].node.getBoundingClientRect().top - spaceTop;

      if (!visibleSection) {
        firstSectionOffset = elemViewportOffset;
        minimalNegativeOffset = elemViewportOffset;
      }

      if (distanceScrolled < firstSectionOffset) {
        visibleSection = null;
      } else {
        if (elemViewportOffset <= 1 && elemViewportOffset >= minimalNegativeOffset) {
          minimalNegativeOffset = elemViewportOffset;
          visibleSection = anchor;
        }
      }
    });

    if (this.state.selected !== visibleSection) {
      this.setState({ selected: visibleSection });
    }
  };

  renderSections(articles) {
    return articles.map((props, i) =>(
        <LegalSection
          spaceTop = {spaceTop}
          id={convert.toCleanKebab(props.title)}
          ref={node => this[convert.toCleanKebab(props.title)] = node}
          key={i}
          {...props}
        />
      )
    );
  }

  getMenuOptions(articles) {
    return articles.map(a => ({
      anchor: convert.toCleanKebab(a.title),
      text: a.title,
    }))
  }

  render() {
    const { articles } = this.props;
    const {selected} = this.state
    const menuOptions = this.getMenuOptions(articles);

    return (
      <div className={cn()}>
        <Meta />
        <A_Container type="init">
          <O_Hero img={{src: "/img/illustrations/legal.svg", alt: "legal"}}>
            <A_H type="hero">Legal Section</A_H>
            <A_P type="hero">Ensuring the security of our users’ data is our most important responsibility and we believe in transparency and openness. Here we set out in full the steps that we take to maintain your privacy and keep your data safe and secure at all times. </A_P>
          </O_Hero>
        </A_Container>
        <O_Menu
          options={menuOptions}
          selected={selected}
          rootLink="/legal/#"
          type="mobile"
        />
        <A_Container type="section-clean">
          <div className={cn('wrapper')}>
            <div className={cn('sidebar')}>
              <div ref={node => this.helperNode = node}  />
              <div className={cn('menu')}>
                <O_Menu
                  options={menuOptions}
                  selected={selected}
                  rootLink="/legal/#"
                  type="desktop"
                />
              </div>
            </div>

            <div className={cn('sections')} >
              { this.renderSections(articles) }
            </div>
          </div>
        </A_Container>
      </div>
    )
  }
}


SE_Legal.propTypes = {
  articles: T.arrayOf(T.shape({
    title: T.string.isRequired,
    sections: T.arrayOf(T.shape({
      header: T.string,
      html: T.string,
    })),
  }))
};

SE_Legal.defaultProps = {
  articles: [],
};

export default SE_Legal
//
//
// import React, {Component} from 'react';
// import T from "prop-types";
// import './styles.scss';
// import { cssClassName, convert } from 'utils'
// import A_Container from 'A_Container'
// import O_CustomSelectBlue from 'O_CustomSelectBlue'
// import A_H from 'A_H'
// import A_P from 'A_P'
// import Meta from './meta'
// import LegalSection from './O_LegalSection/index'
// import O_Menu from 'O_Menu/index'
// import {safeDA} from "utils/index"
// const cn = cssClassName('SE_Legal');
//
// class SE_Legal extends Component {
//   state = {
//     selected: safeDA(this.props, ['articles', 0, 'anchor']),
//     stickyMenu: false,
//   };
//
//   componentDidMount() {
//     document.addEventListener('scroll', this.checkVisibleSection);
//     this.forceUpdate()
//
//   }
//
//   componentWillUnmount() {
//     document.removeEventListener('scroll', this.checkVisibleSection);
//   }
//
//   checkVisibleSection = () => {
//     if (this.state.stickyMenu && (document.body.scrollTop < this.helperNode.getBoundingClientRect().top)) {
//       this.setState({stickyMenu: false})
//     } else if (!this.state.stickyMenu && (document.body.scrollTop > this.helperNode.getBoundingClientRect().top)) {
//       this.setState({stickyMenu: true})
//     }
//
//
//     const anchors = this.props.articles.map(a => convert.toCleanKebab(a.title));
//     let firstSectionOffset;
//     let minimalNegativeOffset = 0;
//     let { visibleSection } = this.state;
//
//     anchors.forEach(anchor => {
//       const distanceScrolled = document.body.scrollTop;
//       const elemViewportOffset = this[anchor].node.getBoundingClientRect().top;
//
//       if (!visibleSection) {
//         firstSectionOffset = elemViewportOffset;
//         minimalNegativeOffset = elemViewportOffset;
//       }
//
//       if (distanceScrolled < firstSectionOffset) {
//         visibleSection = null;
//       } else {
//         if (elemViewportOffset <= 1 && elemViewportOffset >= minimalNegativeOffset) {
//           minimalNegativeOffset = elemViewportOffset;
//           visibleSection = anchor;
//         }
//       }
//     });
//
//     if (this.state.selected !== visibleSection) {
//       this.setState({ selected: visibleSection });
//     }
//   };
//
//   renderSections(articles) {
//     return articles.map((props, i) =>
//       <LegalSection
//         ref={node => this[convert.toCleanKebab(props.title)] = node}
//         key={i}
//         id={convert.toCleanKebab(props.title)}
//         {...props}
//       />
//     );
//   }
//
//   getMenuOptions(articles) {
//     return articles.map(a => ({
//       anchor: convert.toCleanKebab(a.title),
//       text: a.title,
//     }))
//   }
//
//   render() {
//     const { articles } = this.props;
//     const {stickyMenu, selected} = this.state
//     const menuOptions = this.getMenuOptions(articles);
//
//     return (
//       <div className={cn()}>
//         <Meta />
//         <A_Container type="section-clean">
//
//           <div className={cn('top')}>
//             <div type="equal">
//               <A_H type="hero">Legal Section</A_H>
//               <A_P type="hero">Humaniq is proud of its wide partnership network which includes everybody from fintech companies and Blockchain communities to publishing media and app developers.</A_P>
//             </div>
//           </div>
//           <O_CustomSelectBlue
//             stickyMenu = {stickyMenu}
//             options={menuOptions}
//             selected={selected}
//             rootLink="/legal/#"
//             type="desktop"
//           />
//           <div className={cn('wrapper')}>
//             <div className={cn('sidebar')}>
//               <div ref={node => this.helperNode = node}  />
//               <div className={cn('menu')}>
//                 <O_Menu
//                   // stickyMenu = {stickyMenu}
//                   // options={menuOptions}
//                   // selected={selected}
//                   // rootLink="/legal/#"
//                 />
//               </div>
//             </div>
//
//             <div className={cn('sections')} >
//               { this.renderSections(articles) }
//             </div>
//           </div>
//         </A_Container>
//       </div>
//     )
//   }
// }
//
//
// SE_Legal.propTypes = {
//   articles: T.arrayOf(T.shape({
//     title: T.string.isRequired,
//     sections: T.arrayOf(T.shape({
//       header: T.string,
//       html: T.string,
//     })),
//   }))
// };
//
// SE_Legal.defaultProps = {
//   articles: [],
// };
//
// export default SE_Legal
