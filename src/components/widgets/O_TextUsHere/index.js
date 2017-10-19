import React from 'react';
import * as T from "prop-types";
import './styles.scss';
import {cssClassName} from 'utils'

const cn = cssClassName('O_TextUsHere')
import A_H from 'A_H';
import A_Link from 'A_Link';
import A_Container from 'A_Container'

const O_TextUsHere = ({title, text, link: {url, linkText}}) => {
  return (
    <A_Container type='equal'>
      <div className={cn('root')}>
        <A_H type='section'>{title}</A_H>
        <span className={cn('subtitle')}>{text}</span>
        <A_Link to={url} target='_blank' type='section-link'>{linkText}</A_Link>
      </div>
    </A_Container>
  )
}

O_TextUsHere.propTypes = {
  title: T.string.isRequired,
  text: T.string.isRequired,
  link: T.shape({
    linkText: T.string,
    url: T.string,
  }),
};

O_TextUsHere.defaultProps = {
  title: '',
  text: '',
  link: {
    linkText: '',
    url: '',
  }
}
export default O_TextUsHere