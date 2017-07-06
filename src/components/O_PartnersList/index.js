import React from 'react';
// import * as T from "prop-types";
import './styles.scss';
import O_InteractiveImagesList from 'O_InteractiveImagesList'
import O_Filter from 'O_Filter'
import {cssClassName} from 'utils'
import A_Container from 'A_Container'

const cn = cssClassName('O_PartnersList')

const O_PartnersList = ({partners, handleFilter}) => (
  <section className={cn()}>
    <A_Container>
      <div className={cn('inner')}>
        <O_Filter handleFilter={handleFilter}/>
        <O_InteractiveImagesList list={partners}/>
      </div>
    </A_Container>
  </section>
)

O_PartnersList.propTypes = {};

export default O_PartnersList

