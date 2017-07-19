import React, {Component} from 'react';
import T from "prop-types";
import './styles.scss';
import {cssClassName} from 'utils'
import {convert} from 'utils'
const cn = cssClassName('SE_Legal')
import Meta from './meta'
import O_Menu from './O_Menu/index'
import A_Container from 'A_Container'
import A_H from 'A_H'
import A_P from 'A_P'
import LegalSection from './O_LegalSection/index'

class SE_Legal extends Component {
  state = {
    activeLink: null,
  };

  handleNavigation = (e) => {
    this.setState({ activeLink: e.target.name });
  };

  renderSections(articles) {
    return articles.map(props =>
      <LegalSection
        key={props.title}
        {...props}
      />
    );
  };

  getMenuOptions(articles) {
    return articles.map(a => ({
      anchor: `/legal/#${convert.toKebab(a.title)}`,
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
            <A_Container type="equal">
              <A_H type="hero">Legal Section</A_H>
              <A_P type="hero">Humaniq is proud of its wide partnership network which includes everybody from fintech companies and Blockchain communities to publishing media and app developers.</A_P>
            </A_Container>
          </div>
          <div className={cn('wrapper')}>
            <div className={cn('sidebar')}>
              <O_Menu
                options={menuOptions}
                handleNavigation={this.handleNavigation}
                activeLink={activeLink}
              />
            </div>
            <div className={cn('sections')}>
              <A_Container type="wide">
                { this.renderSections(articles) }
              </A_Container>
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
};

export default SE_Legal
