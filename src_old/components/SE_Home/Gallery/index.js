import React from 'react';
import './styles.scss';
import {cssClassName} from 'utils'
const cn = cssClassName('SE_HomeGallery')
import A_Btn from 'A_Btn'
import A_Container from 'A_Container'
import A_H from 'A_H'
import A_P from 'A_P'
import * as T from "prop-types";
import A_Image from 'A_Image'

const SE_HomeGallery = ({entities, title, type}) =>{

  let rederedItems, containerType

  if(type === 'links'){
    rederedItems = entities.map(({img, title, url})=>(
      <div className={cn('galery-item')} key={'key_' + title}>
        <A_Btn type={'interactive'} img={{src: img, alt: title}} to={url} >
          {title}
        </A_Btn>
      </div>

    ))
    containerType = 'section-interactive'
  } else {
    rederedItems = entities.map(({img, title, subtitle})=>(
      <div className={cn('galery-item')} key={'key_' + title}>
        <div className={cn('galery-item-img')}>
          <A_Image src={img} alt={title}/>
        </div>
        <div className={cn('galery-item-title')}>
          <A_H type="section-c">{title}</A_H>
        </div>
        <A_P type="third-center">{subtitle}</A_P>
      </div>
    ))
    containerType = 'section'
  }

  for(let i = 0; i<2; i++){
    rederedItems.push(<div className={cn('galery-item')} key={'key_' + i} />)
  }

  return (
    <A_Container type={containerType}>

        <A_H type="section-c" center >{title}</A_H>
        <div className={cn('galery', {type})}>
          {rederedItems}
        </div>
    </A_Container>
  )
}

SE_HomeGallery.propTypes = {
  type: T.oneOf([
    'links', //link button with hover bottom border
    'not-links' //gray links without hove buttom border + links has subtitle
  ]),
  title: T.string.isRequired,
  entities: T.arrayOf(
              T.shape({
                img: T.string.isRequired,
                title: T.string.isRequired,
                subtitle: T.string,
                url: T.string,
              }).isRequired
            ).isRequired
};

export default SE_HomeGallery