import React from 'react';
import PropTypes from "prop-types";
import styles from './styles.scss';
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
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  profileImage: PropTypes.string,
};

M_AuthorBlock.defaultProps = {

}

export default M_AuthorBlock;

