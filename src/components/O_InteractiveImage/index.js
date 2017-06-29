import React from 'react';
// import * as T from "prop-types";
import './styles.scss';
import A_Image from 'A_Image'
import {cssClassName} from 'utils'

const cn = cssClassName('O_InteractiveImage')

const O_InteractiveImage = ({entity}) => (
  <div className={cn()}>
    <A_Image src={entity.logo}/>
  </div>
)

O_InteractiveImage.propTypes = {};

export default O_InteractiveImage

