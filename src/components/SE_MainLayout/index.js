import React from 'react';
import * as T from "prop-types";
import './styles.scss';
import {cssClassName} from 'utils'
const cn = cssClassName('SE_MainLayout')
import O_Footer from 'O_Footer'
import O_Header from 'O_Header'
import O_Teaser from 'O_Teaser'
import O_RecentNews from 'O_RecentNews'
import O_HandyLinks from 'O_HandyLinks'
import O_StaticInfo from 'O_StaticInfo'
import O_StaticSlider from 'O_StaticSlider'
// import O_StaticInfo2 from 'O_StaticInfo2'
import O_SimpleSlider from 'O_SimpleSlider'

const SE_MainLayout = ({children, mainEmail, navMenu}) => (
  <div className={cn()}>
    <O_Header {...{navMenu}}/>
    <O_Teaser/>
    <O_RecentNews/>
    <O_HandyLinks/>
    <O_StaticInfo/>
    <O_StaticSlider/>
    <O_StaticInfo {...{modificator: 'flip'}}/>
    <O_SimpleSlider/>
    <O_StaticInfo {...{modificator: 'accent'}}/>
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