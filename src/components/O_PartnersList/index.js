import React from 'react';
// import * as T from "prop-types";
import './styles.scss';
import O_InteractiveImagesList from 'O_InteractiveImagesList'
import O_Filter from 'O_Filter'
import {cssClassName} from 'utils'

const cn = cssClassName('O_PartnersList')

const O_PartnersList = ({partners}) => (
  <section className={cn()}>
    <div className="l-container">
      <div className={cn('inner')}>
        <O_Filter data={partners} params={['category']}/>
        <O_InteractiveImagesList list={partners}/>
      </div>
    </div>
  </section>
)

O_PartnersList.propTypes = {};

export default O_PartnersList

