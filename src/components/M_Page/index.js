import React from 'react';
import * as T from "prop-types";
import {cssClassName} from 'utils'
const cn = cssClassName('M_Page')
import A_Image from 'A_Image'
import './styles.scss';

const M_Page = ({headImg, children}) =>(
	<div className={cn()}>
		{headImg &&
			<div className={cn('header-img')}>
				<A_Image {...headImg} />
			</div>
		}
		<div className={cn('item')}>
      {children}
		</div>
	</div>
)

M_Page.propTypes = {
  children: T.any.isRequired,
  headImg: T.shape(A_Image.propTypes)
};

export default M_Page