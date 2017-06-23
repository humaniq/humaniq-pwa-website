import React from 'react';
// import {Link} from 'react-router'
// import * as T from "prop-types";
import './styles.scss';
import A_H from 'A_H'
import A_ButtonLink from 'A_ButtonLink'
import {cssClassName, htmlEncode} from 'utils'
const cn = cssClassName('O_StaticInfo')

const O_StaticInfo = ({modificator, text}) => {
  return (
    <section className={cn([modificator])}>
      <div className="l-container">
        <div className={cn('inner')}>
          <div className={cn('text')}>
            <A_H type="h3">{text.title}</A_H>
            <p>{htmlEncode(text.description)}</p>
            {/*<p dangerouslySetInnerHTML={htmlEncode(text.description)}>_</p>*/}
            {text.button &&
              <A_ButtonLink size="xs" to="#" color="transparent_white">{text.button}</A_ButtonLink>
            }
          </div>
          <img className={cn('image')} src="/img/placeholder.svg"/>
        </div>
      </div>
    </section>
  )
}

O_StaticInfo.propTypes = {};

export default O_StaticInfo