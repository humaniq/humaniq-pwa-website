import React from 'react';
import * as T from "prop-types";
import { cssClassName } from 'utils';
import A_H from 'A_H';
import './styles.scss';

const cn = cssClassName('O_LegalSection');

class O_LegalSection extends React.Component {


  renderSections = (sections) => sections.map(s => (
    <div key={s.header} type="section-clean">
      <div className={cn('text')}>
        <A_H type='section-sub'>{s.header}</A_H>
        <div dangerouslySetInnerHTML={{__html: s.html}} className={cn('html')}/>
      </div>

    </div>
  ));

  render() {
    const { title, sections, id, spaceTop } = this.props;
    const renderedSections = this.renderSections(sections);

    return(
      <div className={cn()} ref={node => this.node = node}>
        <div style={{possition: 'absolute', top: -spaceTop}} id={id} />
        <A_H type='section'>{title}</A_H>
        {renderedSections}
      </div>
    )
  }
}

O_LegalSection.propTypes = {
  title: T.string.isRequired,
  sections: T.arrayOf(T.shape({
    header: T.string,
    paragraphs: T.arrayOf(T.string),
  })),
};

O_LegalSection.defaultProps = {
  title: '',
  sections: [],
};

export default O_LegalSection;