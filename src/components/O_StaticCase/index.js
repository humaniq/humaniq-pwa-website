import React from 'react';
// import {Link} from 'react-router'
// import * as T from "prop-types";
import './styles.scss';
import A_H from 'A_H'
import A_ButtonLink from 'A_ButtonLink'
import {cssClassName} from 'utils'
const cn = cssClassName('O_StaticCase')

const O_StaticCase = ({caseItem, modificator}) => {
  console.log(caseItem);
  return (
    <section className={cn([modificator])}>
      <div className="l-container">
        <div className={cn('inner')}>
          <A_H type="h2" icon={caseItem.icon} addClass={cn('title')}>{caseItem.title}</A_H>
          <div className={cn('block1')}>
            <A_H type="h3">{caseItem.block1.title}</A_H>
            <p>{caseItem.block1.text}</p>
            {caseItem.button &&
              <A_ButtonLink size="xs" to="#" color="transparent_white">{caseItem.button}</A_ButtonLink>
            }
          </div>
          <div className={cn('block2')}>
            <A_H type="h2">{caseItem.block2.title}</A_H>
            <p>{caseItem.block2.text}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

O_StaticCase.propTypes = {};

export default O_StaticCase