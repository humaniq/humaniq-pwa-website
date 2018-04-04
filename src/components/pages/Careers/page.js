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
          There are currently no vacancies but <a href={`mailto:hr@humaniq.com`} target="_blank">please send</a> your resume for future consideration.
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
