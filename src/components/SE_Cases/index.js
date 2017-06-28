import React from 'react';
// import * as T from "prop-types";
import './styles.scss';
import {cssClassName} from 'utils'
import O_Teaser from 'O_Teaser'
import M_TeaserStandardContent from 'M_TeaserStandardContent'

const cn = cssClassName('SE_Cases')
const teaserTitle = 'Explore the potential'
const teaserDescription = 'Whether you’re an investor, a developer or a user waiting to explore full pontential of the Blockchain, Humaniq network works for you.'

const SE_Cases = () => (
  <div className={cn()}>
    <O_Teaser theme='dark'>
      <M_TeaserStandardContent
        title={teaserTitle}
        description={teaserDescription}/>
    </O_Teaser>
  </div>
)

SE_Cases.propTypes = {};

SE_Cases.defaultProps = {}

export default SE_Cases