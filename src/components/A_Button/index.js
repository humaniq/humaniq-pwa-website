import React, { PropTypes } from 'react';
import catnip from 'catnip';
import styles from './styles.scss';
const cn = catnip('a-button')

const A_Button = ({children}) =>
	<button className={cn()} type="button">
		{children}
	</button>
	
A_Button.propTypes = {
};

export default A_Button