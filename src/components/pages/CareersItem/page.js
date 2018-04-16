import React, { Component } from 'react'
// import * as T from "prop-types";
import M_CareerPreview from 'M_CareerPreview'
import A_Container from 'A_Container'
import A_Title_H from 'A_Title_H'

import './styles.scss';
import {cssClassName} from 'utils'
const cn = cssClassName('CareersItem')
import O_CareersList from 'O_CareersList'
import history from 'history'

class CareersItem extends Component {
  state = {}

  componentDidUpdate(){
    this.checkIfExist()
  }

  componentDidMount(){
    this.checkIfExist()
  }

  checkIfExist(){
    const {loading, loaded, entity} = this.props
    if(!loading && loaded && !Object.keys(entity).length){
      history.push('/error/404')
    }
  }

  render() {
    const { entity, entities } = this.props

    return (
      <A_Container type={'section-clean'} mix={cn('container')}>
        <A_Title_H
          type='section'
          mix={cn('title')}
        >Careers </A_Title_H>
        <div className={cn('root')}>
          <div className={cn('left')}>
            <M_CareerPreview {...entity} type={'single'}/>
            <div className={cn('body')} dangerouslySetInnerHTML={{__html: entity.body}} />
            <A_Title_H mix={cn('title-contact')} type={'inner-pages'}
            >Contact us </A_Title_H>
            <p>If you are interested in this position please send your resume to <a href={`mailto:hr@humaniq.com`} target='_blank'>hr@humaniq.com</a></p>

          </div>
          <div className={cn('right')}>
            <O_CareersList entities={entities}/>
          </div>
        </div>
      </A_Container>
    )
  }
}

CareersItem.propTypes = {}

CareersItem.defaultProps = {
  entity: {},
}

export default CareersItem
