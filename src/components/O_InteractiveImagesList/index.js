import React from 'react';
// import * as T from "prop-types";
import './styles.scss';
import {cssClassName} from 'utils'
const cn = cssClassName('O_InteractiveImagesList')
import O_InteractiveImage from 'O_InteractiveImage'

const O_InteractiveImagesList = ({list}) => (
  <div className={cn()}>
    { list.map((item, index) => {
      return (<O_InteractiveImage entity={item} key={'key_' + index}/>)
    })}
  </div>
)

O_InteractiveImagesList.propTypes = {};

export default O_InteractiveImagesList

