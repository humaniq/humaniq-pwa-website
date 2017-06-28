import React from 'react';
import * as T from "prop-types";
import './styles.scss';
import {cssClassName} from 'utils'
const cn = cssClassName('M_TeaserStandardContent')

const M_TeaserStandardContent = ({title, description, content}) => {
  return (
    <div className={cn()}>
      <div className={cn('title')}>{title}</div>
      <div className={cn('description')}>{description}</div>
      {content && <div className={cn('content')}>{content}</div>}
    </div>
  )
}

M_TeaserStandardContent.propTypes = {
  title: T.string.isRequired,
  description: T.string.isRequired
};

M_TeaserStandardContent.defaultProps = {};

export default M_TeaserStandardContent