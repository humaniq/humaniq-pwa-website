import React from 'react';
// import * as T from "prop-types";
import './styles.scss';
import {cssClassName} from 'utils'
const cn = cssClassName('O_Teaser')

const O_Teaser = ({theme, children}) => {

  return (
    <section className={cn({theme})}>
      <div className="l-container">
        <div className={cn('inner')}>
          {children}
        </div>
      </div>
    </section>
  )
}

O_Teaser.propTypes = {};

O_Teaser.defaultProps = {};

export default O_Teaser