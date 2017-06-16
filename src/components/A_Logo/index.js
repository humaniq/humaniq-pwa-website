import React, { PropTypes } from 'react';
import catnip from 'catnip';
import styles from './styles.scss';
const cn = catnip('a-logo');
import A_Link	from 'A_Link'

const A_Logo = () =>(
	<A_Link src="/">
		<img className={cn()} src="/img/humaniq-logo.svg" alt="humaniq.co"/>
	</A_Link>
)

A_Logo.propTypes = {
};

export default A_Logo
