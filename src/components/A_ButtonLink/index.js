import React, { PropTypes } from 'react';
import * as T from "prop-types";
import A_Link from 'A_Link'
import catnip from 'catnip';
import './styles.scss';
const cn = catnip('a-button-link')

// size - button size (xs, s, m, l, xl)
// color - button color (primary_dark / primary_dark_theme_false, secondary_dark, disabled, primary_light / primary_dark_theme_true , secondary_light)

const A_ButtonLink = ({children, to, size, color}) =>
  <A_Link className={cn({size, color})} to={to}>
    {children}
  </A_Link>

A_ButtonLink.propTypes = {
  children: T.any.isRequired
};

export default A_ButtonLink