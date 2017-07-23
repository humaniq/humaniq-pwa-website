import React from 'react';
import * as T from "prop-types";
import './styles.scss';
import {cssClassName} from 'utils'
const cn = cssClassName('M_NoResults')

const M_NoResults = ({text}) =>(
  <div className={cn()}>Sorry! We looked everywhere, but couldn't find “<span className={'request'}>{text}</span>”. 💔 🔍</div>
)

M_NoResults.propTypes = {
  text: T.string.isRequired
};

M_NoResults.defaultProps = {
  text: ''
}
export default M_NoResults