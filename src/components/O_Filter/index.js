import React from 'react';
// import * as T from "prop-types";
import './styles.scss';
import {cssClassName} from 'utils'
import A_ButtonLink from 'A_ButtonLink'
import M_InputSelect from 'M_InputSelect'

const cn = cssClassName('O_Filter')

const O_Filter = ({handleFilter}) => (
  // планируется принимать {data, params - для создания набора селектов по указанным параметрам}
  <div className={cn()}>
    <M_InputSelect
      options={['technical', 'general', 'others']}
      placeholder='Choose'
      onChange={handleFilter}
    />
    {/*<A_ButtonLink size="xs" to="#" color="secondary_dark" onClick={handleFilter}>Filter</A_ButtonLink>*/}
    <span className="a-button-link a-button-link_size_xs a-button-link_color_secondary_dark" onClick={handleFilter}>Filter</span>
  </div>
)

O_Filter.propTypes = {};

export default O_Filter

