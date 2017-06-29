import React from 'react';
import * as T from "prop-types";
import './styles.scss';
import {cssClassName} from 'utils'
const cn = cssClassName('M_TeaserStandardContent')

const M_TeaserStandardContent = ({teaser}) => {
  return (
    <div className={cn()}>
      <div className={cn('title')}>{teaser.title}</div>
      <div className={cn('description')}>{teaser.description}</div>
      {teaser.content && <div className={cn('content')}>{teaser.content}</div>}
    </div>
  )
}

M_TeaserStandardContent.propTypes = {
  teaser: T.object.isRequired
};

M_TeaserStandardContent.defaultProps = {};

export default M_TeaserStandardContent