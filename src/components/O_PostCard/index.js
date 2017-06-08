import React from 'react';
import PropTypes from "prop-types";
import styles from './styles.scss';
import {cssClassName} from 'utils'
const cn = cssClassName('O_PostCard')
import A_Image from 'A_Image'
import M_AuthorBlock from 'M_AuthorBlock'
import A_Link from 'A_Link'

const O_PostCard = ({featuredImage, author, url, published}) => {

  return (
      <div className={cn({})}>
        <A_Link block to={url}>

        <A_Image src={featuredImage} objectFit="contain"/>
        <div className={cn('author')}>
          <M_AuthorBlock {...author} />
        </div>
        <p className={cn('published')}>
          {published}
        </p>
        </A_Link>
      </div>
  )
}

O_PostCard.propTypes = {
  featuredImage: PropTypes.string,
  url: PropTypes.string,
  onLike: PropTypes.func,
  published: PropTypes.string.isRequired,
  likes: PropTypes.number,
};

O_PostCard.defaultProps = {
  metaData: {
    author: '',
    updatedAt: '',
    createdAt: '',
  }
};

export default O_PostCard