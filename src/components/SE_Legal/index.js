import React, {Component} from 'react';
import T from "prop-types";
import './styles.scss';
import { cssClassName, convert } from 'utils'
import A_Container from 'A_Container'
import A_H from 'A_H'
import A_P from 'A_P'
import Meta from './meta'
import LegalSection from './O_LegalSection/index'
import O_Menu from '../O_Menu/index'

const cn = cssClassName('SE_Legal');

class SE_Legal extends Component {
  state = {
    activeLink: null,
  };

  componentDidMount() {
    document.addEventListener('scroll', this.onScroll);
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', this.onScroll);
  }

  onScroll = () => {
    this.checkVisibillity();
    this.setMenuOffset();
  };

  setMenuOffset = () => requestAnimationFrame(() => {
    const elementInitialOffset = 291;
    const elementMinOffset = 100;
    const scrolltop = window.pageYOffset; // get number of pixels document has scrolled vertically
    let nextOffset = elementInitialOffset + -scrolltop * .3;

    if (nextOffset < elementMinOffset) {
      nextOffset = elementMinOffset;
    }
    if (nextOffset >= elementMinOffset) {
      this.sidebar.style.top = nextOffset + 'px';
    }
  });

  checkVisibillity = () => {
    const anchors = this.props.articles.map(a => convert.toKebab(a.title));
    let firstSectionPosition;
    let minimalNegativeOffset = 0;
    let visibleSection;

    anchors.forEach(anchor => {
      const distanceScrolled = document.body.scrollTop;
      const elemRect = this[anchor].node.getBoundingClientRect();
      const elemViewportOffset = elemRect.top;
      const totalOffset = distanceScrolled + elemViewportOffset;

      if (!firstSectionPosition) {
        firstSectionPosition = totalOffset;
      }
      if (!minimalNegativeOffset) {
        minimalNegativeOffset = elemViewportOffset;
      }

      if (distanceScrolled < firstSectionPosition) {
        visibleSection = null;
      } else {
        if (elemViewportOffset <= 1 && elemViewportOffset >= minimalNegativeOffset) {
          minimalNegativeOffset = elemViewportOffset;
          visibleSection = anchor;
        }
      }
    });

    if (this.state.activeLink !== visibleSection) {
      this.setState({ activeLink: visibleSection });
    }
  };

  handleNavigation = (e) => {
    this.setState({ activeLink: e.target.name });
  };

  renderSections(articles) {
    return articles.map(props =>
      <LegalSection
        ref={node => this[convert.toKebab(props.title)] = node}
        key={props.title}
        checkVisibillity={this.checkVisibillity}
        id={convert.toKebab(props.title)}
        {...props}
      />
    );
  };

  getMenuOptions(articles) {
    return articles.map(a => ({
      anchor: convert.toKebab(a.title),
      text: a.title,
    }))
  }

  render() {
    const { articles } = this.props;
    const menuOptions = this.getMenuOptions(articles);
    const { activeLink } = this.state;

    return (
      <div className={cn()}>
        <Meta />
        <A_Container type="wide">

          <div className={cn('top')}>
            <div type="equal">
              <A_H type="hero">Legal Section</A_H>
              <A_P type="hero">Humaniq is proud of its wide partnership network which includes everybody from fintech companies and Blockchain communities to publishing media and app developers.</A_P>
            </div>
          </div>

          <div className={cn('wrapper')}>
            <div className={cn('sidebar')}>
              <div className={cn('fixed')} ref={ node => this.sidebar = node }>
                <O_Menu
                  options={menuOptions}
                  handleNavigation={this.handleNavigation}
                  activeLink={activeLink}
                  rootLink="/legal/#"
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
      paragraphs: T.arrayOf(T.string),
    })),
  }))
};

SE_Legal.defaultProps = {
  articles: [],
};

export default SE_Legal
