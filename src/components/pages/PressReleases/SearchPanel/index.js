import React, { Component } from 'react';
import './styles.scss';
import {cssClassName} from 'utils'
import A_Title_H from 'A_Title_H'
import A_Btn from 'A_Btn'
import A_InputText_H from 'A_InputText_H'

const cn = cssClassName('PressReleasesSearch');

class PressReleasesSearch extends Component {

  render() {
    const {mix} = this.props
    return(
      <div className={cn([mix])}>
        <A_Title_H
          type='subtitle'
          mix={cn('title')}
          theme='blue'
        >
          Search
        </A_Title_H>
        <form className={cn('form')}>
          <A_InputText_H
            placeHolder="Search categ1"
            mix={cn('input')}
          />
          <A_InputText_H
            placeHolder="Search categ2"
            mix={cn('input')}
          />
          <A_InputText_H
            placeHolder="Search categ3"
            mix={cn('input')}
          />
          <A_Btn
            type='material-r-btn-blue'
            mix={cn('search-btn')}
          >
            Search
          </A_Btn>
        </form>
      </div>
    )
  }
}

export default PressReleasesSearch
