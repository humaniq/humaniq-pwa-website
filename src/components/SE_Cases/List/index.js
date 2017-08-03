import React from 'react';
import * as T from "prop-types";
import './styles.scss';
import {cssClassName} from 'utils'
const cn = cssClassName('SE_CasesList')
import A_Container from 'A_Container'
import A_H from 'A_H'
import A_P from 'A_P'
import A_Image from "A_Image/index";
import {convert} from 'utils'

const SE_CasesList = ({cases}) =>{

  const _render = cases.map(({title, introduction, img, solution}) => {
    const anchor = convert.toKebab(title)
    return(
      <div  id={anchor} key={title}>
        <A_Container type='section-long-text' >
          <A_H type='section'>{title}</A_H>
          <A_H type='section-sub'>Introduction</A_H>
          <A_P type='third'>{introduction}</A_P>
          <div className={cn('image')}>
            <A_Image src={img} alt={title} />
          </div>
          <A_H type='section-sub'>Humaniq Solution</A_H>
          <A_P type='third'>{solution}</A_P>
        </A_Container>
      </div>
    )
  })

  return(
    <div className={cn('root')}>
      {_render}
    </div>
  )
}

SE_CasesList.propTypes = {
  cases: T.arrayOf(T.shape({
    title: T.string.isRequired,
    introduction: T.string.isRequired,
    img: T.string.isRequired,
    solution: T.string.isRequired,
    last: T.bool
  })).isRequired
};

SE_CasesList.defaultProps = {
  cases: []
}
export default SE_CasesList