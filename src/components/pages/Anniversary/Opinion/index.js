import React from 'react';
// import * as T from "prop-types";
import './styles.scss';
import {cssClassName} from 'utils'
const cn = cssClassName('Opinion')
import A_P from "A_P";
import {convert} from "/utils";

const Opinion = ({name, title, text, img, right}) =>{
  return(

    <div className={cn()} id={convert.toCleanKebab(name)}>
      <div className={cn('profile', {right})}>
        <img className={cn('profile-image')} src={img}/>
        <A_P mix={cn('profile-name')}>{name}</A_P>
        <p className={cn('profile-title')}>{title}</p>
      </div>
      <div className={cn('opinion')}>
        <A_P mix={cn('opinion-name')}>{name}</A_P>

        <p className={cn('opinion-text')}dangerouslySetInnerHTML={{__html: text}}/>
      </div>
    </div>
  )
}

Opinion.propTypes = {
};

Opinion.defaultProps = {
}
export default Opinion