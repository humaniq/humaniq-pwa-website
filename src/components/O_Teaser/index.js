import React from 'react';
// import * as T from "prop-types";
import './styles.scss';
import {cssClassName} from 'utils'
const cn = cssClassName('O_Teaser')
import A_Container from 'A_Container'

const O_Teaser = ({theme, children}) => {

  return (
    <section className={cn({theme})}>
      <A_Container>
        <div className={cn('inner')}>
          {children}
        </div>
      </A_Container>
    </section>
  )
}

O_Teaser.propTypes = {};

O_Teaser.defaultProps = {};

export default O_Teaser