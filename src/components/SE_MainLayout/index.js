import React from 'react';
import * as T from "prop-types";
import './styles.scss';
import {cssClassName} from 'utils'
const cn = cssClassName('SE_MainLayout')
import A_Link from 'A_Link'

const SE_MainLayout = ({children, mainTagline, mainEmail}) => (
  <div className={cn()}>
    <header className={cn('header')}>
      <div className={cn('logo-block')}>
        <A_Link to={'/'} >
          <p className={cn('logo')}>Logo IQ</p>
        </A_Link>
      </div>
      <p className={cn('mainTagline')}>{mainTagline}</p>
    </header>
    <main className={cn('main')}>
      {children}
    </main>
    
    <footer className={cn('footer')}>
      <span>Company Name</span><a href={"mailto:" + mainEmail} target="_blank">{mainEmail}</a></footer>
  </div>
)

SE_MainLayout.propTypes = {
  children: T.any.isRequired,
  mainEmail: T.string,
};

SE_MainLayout.propTypes = {
  children: T.any.isRequired,
  mainEmail: T.string,
  mainTagline: T.string
};

SE_MainLayout.defaultProps = {
  mainEmail: '',
  mainTagline: '',
}

export default SE_MainLayout