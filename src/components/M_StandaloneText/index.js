import React from 'react';
// import * as T from "prop-types";
import './styles.scss';
import A_H from 'A_H'
import {cssClassName} from 'utils'

const cn = cssClassName('M_StandaloneText')

const M_StandaloneText = ({text}) =>(

  <section className={cn()}>
    <div className="l-container">
      <div className={cn('inner')}>
        <A_H type="h2" icon={text.icon}>{text.title}</A_H>
        <p>{text.description}</p>
      </div>
    </div>
  </section>
)

M_StandaloneText.propTypes = {};

M_StandaloneText.defaultProps = {
}

export default M_StandaloneText