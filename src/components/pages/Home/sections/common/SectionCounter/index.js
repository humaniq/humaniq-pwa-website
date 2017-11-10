import React from 'react';
import * as T from "prop-types";
import './styles.scss';
import {cssClassName} from 'utils'

const cn = cssClassName('A_SectionCounter')

const A_SectionCounter = ({mix, sectionNum, theme}) => (
  <div className={cn([mix], {theme})}>
    — {sectionNum < 10 ? (`0${sectionNum}.`):(`${sectionNum}.`)}
  </div>
)

export default A_SectionCounter

A_SectionCounter.propTypes = {
  mix: T.string, //BEM mixin from parent block
  sectionNum: T.number.isRequired,//section number to render
  theme: T.oneOf([
    'dark', // black counter
    'bright', // sky-blue counter
  ]).isRequired
};