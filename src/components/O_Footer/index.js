import React, {PropTypes} from 'react';
import A_Button from 'A_Button'
import M_MenuList from 'M_MenuList'
import catnip from 'catnip';
import styles from './styles.scss';
const cn = catnip('o-footer');

const O_Footer = ({mainEmail}) => {
  const handleClick = (url) => (e) => {
    e.preventDefault()
    history.push(url)
  }

  return (
    <footer className={cn('root')}>
      <div className={cn('menu')}>
        <M_MenuList mod='short' onClick={handleClick} mainEmail={mainEmail}/>
      </div>
      <div className={cn('info')}>
        <div className={cn('info-text')}>Learn more and stay tuned!
          It‘s a really exciting journey!
        </div>
      </div>
      <div className={cn('social')}>
        <A_Button pattern="rounded-social" >Facebook</A_Button><br/>
        <A_Button pattern="rounded-social" mod="last">You Tube</A_Button>
      </div>
      <div className={cn('copiright')}>
        <div>
          © Humaniq 2017. All Rights Reserved.
        </div>
      </div>
    </footer>
  )
}


O_Footer.propTypes = {};


export default O_Footer
