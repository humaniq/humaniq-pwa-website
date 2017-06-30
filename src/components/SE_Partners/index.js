import React from 'react';
// import * as T from "prop-types";
import './styles.scss';
import O_Teaser from 'O_Teaser'
import M_TeaserStandardContent from 'M_TeaserStandardContent'
import M_StandaloneText from 'M_StandaloneText'
import O_PartnersList from 'O_PartnersList'
import {cssClassName} from 'utils'

const cn = cssClassName('SE_Partners')
const teaser = {title: 'Join our Community', description: 'Humaniq is proud of its wide partnership network which includes everybody from fintech companies and Blockchain communities to publishing media and app developers.'}
const text = {title: 'Ever growing network', description: 'We believe in the services that Humaniq partners provide, to support us in raising standards and making excellence a habit. Our partners create and deliver cutting-edge technologies and Blockchain solutions vital to achieving financial inclusion for everybody. They include independent consultants who help us to implement new solutions, laboratories who work with us to test products, Blockchain communities, and many more.'}
const partners = [
  {logo: '/img/placeholder.svg', url: '/#', title: 'Company name', description: 'Lorem ipsum dolor sit amet consectetur adipiscing elitmet consectetur adipiscing elit', category: 'technical'},
  {logo: '/img/placeholder.svg', url: '/#', title: 'Company name', description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit', category: 'technical'},
  {logo: '/img/placeholder.svg', url: '/#', title: 'Company name', description: 'Lorem ipsum dolor adipiscing elit', category: 'general'},
  {logo: '/img/placeholder.svg', url: '/#', title: 'Company name', description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit', category: 'general'},
  {logo: '/img/placeholder.svg', url: '/#', title: 'Company name', description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit', category: 'technical'},
  {logo: '/img/placeholder.svg', url: '/#', title: 'Company name', description: 'Lorem ipsum dolor sit amet consectdolor sit amet consectdolor sit amet consectetur adipiscing elit', category: 'technical'},
  {logo: '/img/placeholder.svg', url: '/#', title: 'Company name', description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit', category: 'general'},
  {logo: '/img/placeholder.svg', url: '/#', title: 'Company name', description: 'Lorem ipsum dolor sit amet consectetur adipiscingm ipsum dolor sit amet consectetur adipiscing elit', category: 'technical'},
  {logo: '/img/placeholder.svg', url: '/#', title: 'Company name', description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit', category: 'technical'},
  {logo: '/img/placeholder.svg', url: '/#', title: 'Company name', description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit', category: 'general'},
  {logo: '/img/placeholder.svg', url: '/#', title: 'Company name', description: 'Lorem ipsum dolorpiscing elit', category: 'general'},
  {logo: '/img/placeholder.svg', url: '/#', title: 'Company name', description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit', category: 'technical'},
  {logo: '/img/placeholder.svg', url: '/#', title: 'Company name', description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit', category: 'technical'},
  {logo: '/img/placeholder.svg', url: '/#', title: 'Company name', description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit', category: 'general'},
  {logo: '/img/placeholder.svg', url: '/#', title: 'Company name', description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit', category: 'technical'},
  {logo: '/img/placeholder.svg', url: '/#', title: 'Company name', description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit', category: 'technical'}
]

const SE_Partners = () => (
  <div className={cn()}>
    <O_Teaser theme='dark'>
      <M_TeaserStandardContent teaser={teaser}/>
    </O_Teaser>
    <M_StandaloneText text={text}/>
    <O_PartnersList partners={partners}/>
  </div>
)


SE_Partners.propTypes = {};

SE_Partners.defaultProps = {}

export default SE_Partners