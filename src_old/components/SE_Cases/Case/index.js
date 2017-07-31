import React from 'react';
import * as T from "prop-types";
import './styles.scss';
import {cssClassName} from 'utils'
const cn = cssClassName('SE_CasesCase')
import A_Container from 'A_Container'
import A_H from 'A_H'
import A_P from 'A_P'
import A_Image from "../../A_Image/index";
import {convert} from 'utils'

const SE_CasesCase = ({title, introduction, img, solution}) =>{
  const anchor = convert.toKebab(title)
  return(
    <div className={cn()} id={anchor}>
      <A_Container type='section-clean' >
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
}

SE_CasesCase.propTypes = {
};

SE_CasesCase.defaultProps = {
}
export default SE_CasesCase