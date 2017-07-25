import React from 'react';
// import ExecutionEnvironment from 'react/lib/ExecutionEnvironment';
import * as T from "prop-types";
import { cssClassName, convert } from 'utils';
import A_H from 'A_H';
import A_P from 'A_P';
import './styles.scss';

const cn = cssClassName('O_LegalSection');

class O_LegalSection extends React.Component {
  renderParagraphs = (paragraphs) => paragraphs.map((p, i) =>
    <A_P
      type='third'
      key={`p${i}`}>{p}</A_P
    >
  );

  renderSections = (sections) => sections.map(s => (
    <div key={s.header} type="section-clean">
      <A_H type='section-sub'>{s.header}</A_H>
      {this.renderParagraphs(s.paragraphs)}
    </div>
  ));

  render() {
    const { title, sections, checkVisibillity, id } = this.props;
    const renderedSections = this.renderSections(sections);

    return(
      <div className={cn()} ref={node => this.node = node} id={id}>
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