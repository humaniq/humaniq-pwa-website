import React from 'react';
import * as T from "prop-types";
const cn = cssClassName('SE_PartnersSelect')

const SE_PartnersSelect = ({handleSubmit}) =>(
  <form onSubmite={handleSubmit}>

  </form>
)

SE_PartnersSelect.propTypes = {
  handleSubmit: T.func.isRequired
};

SE_PartnersSelect.defaultProps = {
}
export default SE_PartnersSelect