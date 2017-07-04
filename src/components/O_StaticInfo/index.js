import React from 'react';
// import {Link} from 'react-router'
// import * as T from "prop-types";
import './styles.scss';
import A_H from 'A_H'
import A_ButtonLink from 'A_ButtonLink'
import {cssClassName} from 'utils'
const cn = cssClassName('O_StaticInfo')
import A_Container from 'A_Container'

const O_StaticInfo = ({modificator, text}) => {
  return (
    <section className={cn([modificator])}>
      <A_Container>
        <div className={cn('inner')}>
          <div className={cn('text')}>
            <A_H type="h3">{text.title}</A_H>
            <p>{text.description}</p>
            {text.button &&
              <A_ButtonLink size="xs" to="#" color="primary_light">{text.button}</A_ButtonLink>
            }
          </div>
          <img className={cn('image')} src="/img/placeholder.svg"/>
        </div>
      </A_Container>
    </section>
  )
}

O_StaticInfo.propTypes = {};

export default O_StaticInfo