import React from 'react';
import * as T from "prop-types";
import './styles.scss';
import {cssClassName} from 'utils'
const cn = cssClassName('SE_PersonalFormHeader')
import A_Image from 'A_Image'
import A_P from 'A_P'
import history from 'history'

const SE_PersonalFormHeader = ({phone_number, photo_url, children, invitationCode}) =>(
  <div className={cn('root')}>
    <div className={cn('text')} onClick={() => history.push(`/invite/${invitationCode}`)}>
      <div className={cn('avatar')}>
        <A_Image src={photo_url} type='avatar-sm'/>

      </div>
      <A_P type='third-center_white'>
        {phone_number}
      </A_P>
    </div>
    <div className={cn('nav')}>{children}</div>
  </div>
)

SE_PersonalFormHeader.propTypes = {
  children: T.any
};

export default SE_PersonalFormHeader