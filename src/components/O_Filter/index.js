import React from 'react';
// import * as T from "prop-types";
import './styles.scss';
import {cssClassName} from 'utils'
import A_ButtonLink from 'A_ButtonLink'
import M_InputSelect from 'M_InputSelect'

const cn = cssClassName('O_Filter')

const O_Filter = () => (
  // планируется принимать {data, params - для создания набора селектов по указанным параметрам}
  <div className={cn()}>
    <M_InputSelect
      options={['Technical', 'Non technical', 'Others']}
      placeholder='Choose'
    />
    <A_ButtonLink size="xs" to="#" color="secondary_dark">Filter</A_ButtonLink>
  </div>
)

O_Filter.propTypes = {};

export default O_Filter

