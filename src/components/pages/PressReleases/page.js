import React from 'react'
// import * as T from "prop-types";
import A_Title_H from 'A_Title_H'
import A_Container from 'A_Container'
import O_PressReleasesList from 'O_PressReleasesList'

import './styles.scss'
import { cssClassName } from 'utils'
const cn = cssClassName('PressReleases')

const PressReleases = ({ entities, loaded, loading }) => {
  return (
    <A_Container type={'section-clean'}>
      <A_Title_H type="section" mix={cn('title')}>Press releases</A_Title_H>
      {!loading && loaded && <O_PressReleasesList entities={entities} />
      }
    </A_Container>
  )
}

PressReleases.propTypes = {}

PressReleases.defaultProps = {
  entities: []
}
export default PressReleases
