import React from 'react';
import PropTypes from "prop-types";
import styles from './styles.scss';
import {cssClassName} from 'utils'
const cn = cssClassName('O_Post')
import M_AuthorBlock from 'M_AuthorBlock'
import M_Title from 'M_Title'

const O_Post = ({body, title, published, author}) =>(
  <div className={cn()}>
    <header>
      <M_Title>{title}</M_Title>
      <M_AuthorBlock {...author} />
      {published}

    </header>
    <div className={cn('body')} dangerouslySetInnerHTML={{ __html: body}} />
  </div>
)

O_Post.propTypes = {
  body: PropTypes.string.isRequired
};

export default O_Post