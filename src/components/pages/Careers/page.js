import React from 'react'
// import * as T from "prop-types";
import A_Title_H from 'A_Title_H'
import A_Container from 'A_Container'
import O_CareersList from 'O_CareersList'

import './styles.scss'
import { cssClassName } from 'utils'
const cn = cssClassName('Careers')

const Careers = ({ entities, loaded, loading }) => {
  return (
    <A_Container type={'section-clean'}>
      <A_Title_H type="section" mix={cn('title')}>Careers</A_Title_H>
      {!loading && loaded && !entities.length ? (
        <p className={cn('no-vacancies')}>
          Humaniq is constantly growing and looking for valuable assets for our team. The list of Humaniq vacancies gets updated regularly, so if you share our values and wish to join us, we will be happy to welcome your CVs at <a href={`mailto:hr@humaniq.com`} target="_blank">hr@humaniq.com</a>.

          We are currently interested in specialists with the focus on:
          <br/>
          <br/>

          <ul>
            <li>Product management</li>
            <li>Customer development</li>
            <li>Analytics and Targeting</li>
            <li>SMM & Community</li>
            <li>E-mail marketing</li>
            <li>Blockchain Development</li>

          </ul>
          <br/>

          Should you not have found a vacancy of interest on this list, we will in any case be happy to receive a resume from you. As soon as we have an opening that corresponds to your skills, we will be sure to get in touch.
        </p>
      ) : (
        <O_CareersList entities={entities} />
      )}
    </A_Container>
  )
}

Careers.propTypes = {}

Careers.defaultProps = {}
export default Careers
