import React from 'react';
import * as T from "prop-types";
import './styles.scss';
import {cssClassName} from 'utils'
const cn = cssClassName('M_AuthorBlock')

const M_AuthorBlock = ({firstName, lastName, profileImage}) => {
  const authorName = `${lastName} ${firstName}`
  return(
    <p className={cn()}>
      { profileImage &&
          <img src={profileImage} className={cn('avatar')}/>
      }
      {authorName}
    </p>
  )
}

M_AuthorBlock.propTypes = {
  firstName: T.string.isRequired,
  lastName: T.string.isRequired,
  profileImage: T.string,
};

M_AuthorBlock.defaultProps = {

}

export default M_AuthorBlock;

