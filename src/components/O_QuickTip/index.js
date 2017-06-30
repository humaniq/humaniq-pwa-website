import React from 'react';
import * as T from "prop-types";
import './styles.scss';
import {cssClassName} from 'utils'
import A_Image from "A_Image"
import A_Link from "A_Link"

const cn = cssClassName('O_QuickTip')

const O_QuickTip = ({imgSrc, question, tip:{text, url}}) =>(
  <div className="l-container">
    <div className={cn('root')}>
      <span className={cn('image')}>
        <A_Image src={imgSrc} realSize rounded/>
      </span>
      <p>

        <span className={cn('question')}>{question}</span>
        <span className={cn('tip')}><A_Link to={url} color="primary" >{text}</A_Link></span>
      </p>
    </div>
  </div>
)

O_QuickTip.propTypes = {
  imgSrc: T.string.isRequired,
  question: T.string.isRequired,
  tip: T.shape({
    text: T.string,
    url: T.string
  }),
}.isRequired;

O_QuickTip.defaultProps = {
}
export default O_QuickTip