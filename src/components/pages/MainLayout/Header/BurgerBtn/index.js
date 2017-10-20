import React from 'react'
import * as T from "prop-types";
import './styles.scss'
import {cssClassName} from 'utils'

const cn = cssClassName('A_BurgerBtn');

const A_BurgerBtn = ({mix, isActive, onClick}) => (
  <div
    className = {cn([mix], {isActive})}
    onClick = {() =>{onClick()}}
  >
    <div className = {cn('line',{position:'top'})} />
    <div className = {cn('line',{position:'middle'})} />
    <div className = {cn('line',{position:'bottom'})} />
  </div>
)

export default A_BurgerBtn

A_BurgerBtn.propTypes = {
  mix: T.string, //BEM mixin from parent block
  isActive: T.bool.isRequired //toggles btn animation
};