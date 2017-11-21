import React, {Component} from 'react';
import T from "prop-types";
import './styles.scss';
import { cssClassName} from 'utils'
import A_Container from 'A_Container'
import O_Hero from 'O_Hero'

import A_H from 'A_H'
import A_P from 'A_P'
import O_Menu from 'O_Menu/index'
const cn = cssClassName('Legal');
import Meta from './meta'

class Legal extends Component {

  renderSections = (sections) => sections.map(s => (
    <div key={s.header} type="section-clean">
      <div className={cn('text')}>
        <A_H type='section-sub'>{s.header}</A_H>
        <div dangerouslySetInnerHTML={{__html: s.html}} className={cn('html')}/>
      </div>

    </div>
  ));

  render() {
    const { title, sections, options } = this.props;
    const renderedSections = this.renderSections(sections);

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
          options={options}
          type="mobile"
        />
        <A_Container type="section-clean">
          <div className={cn('wrapper')}>
            <div className={cn('sidebar')}>
              <div />
              <div className={cn('menu')}>
                <O_Menu
                  options={options}
                  type="desktop"
                />
              </div>
            </div>
           <div className={cn('page')}>
              <A_H type='section'>{title}</A_H>
              {renderedSections}
            </div>
          </div>
        </A_Container>
      </div>
    )
  }
}


Legal.propTypes = {
  title: T.string.isRequired,
  sections: T.arrayOf(T.shape({
    header: T.string,
    html: T.string,
  })),
};

Legal.defaultProps = {
  articles: {},
  sections: [],
};

export default Legal