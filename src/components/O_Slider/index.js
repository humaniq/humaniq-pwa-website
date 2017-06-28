import React from 'react';
import * as T from "prop-types";

import SliderFramed from './framed'
import SliderWide from './wide'


const Slider = ({type, ...props}) => {
  if(type === 'wide'){
    return <SliderWide {...props} />
  } else {
    return <SliderFramed {...props} />
  }
}

Slider.propTypes = {
  type: T.oneOf(['wide', 'framed']).isRequired
};

Slider.defaultProps = {
}
export default Slider