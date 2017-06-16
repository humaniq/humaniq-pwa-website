import React from 'react';
import * as T from "prop-types";
import './styles.scss';
import {cssClassName} from 'utils'
const cn = cssClassName('SE_MainLayout')
import O_Footer from 'O_Footer'
import O_Header from 'O_Header'

const SE_MainLayout = ({children, mainEmail, navMenu}) => (
  <div className={cn()}>
    <div className={cn('header')}>
      <O_Header {...{navMenu}}/>
    </div>
    <main className={cn('main')}>
      {children}
    </main>
    <O_Footer mainEmail={mainEmail}/>
  </div>
)

SE_MainLayout.propTypes = {
  children: T.any.isRequired,
  mainEmail: T.string,
  navMenu: T.array.isRequired
};

SE_MainLayout.defaultProps = {
  mainEmail: '',
  mainTagline: '',
}

export default SE_MainLayout