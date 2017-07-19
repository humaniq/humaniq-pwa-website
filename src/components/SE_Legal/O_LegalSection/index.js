import React from 'react';
import * as T from "prop-types";
import './styles.scss';
import { cssClassName, convert } from 'utils';
const cn = cssClassName('O_LegalSection');
import A_Container from 'A_Container';
import A_H from 'A_H';
import A_P from 'A_P';

const renderParagraphs = (paragraphs) => paragraphs.map((p, i) => <A_P type='third' key={`p${i}`}>{p}</A_P>);

const renderSections = (sections) => sections.map(s => (
  <A_Container key={s.header} type="section-clean">
    <A_H type='section-sub'>{s.header}</A_H>
    {renderParagraphs(s.paragraphs)}
  </A_Container>
));

const O_LegalSection = ({ title, sections }) =>{
  const anchorId = convert.toKebab(title);
  const renderedSections = renderSections(sections);

  return(
    <div className={cn()} id={anchorId}>
      <A_Container type='section-clean' >
        <A_H type='section'>{title}</A_H>
        {renderedSections}
      </A_Container>
    </div>
  )
};

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