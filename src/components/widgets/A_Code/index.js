import React from 'react'
import {prettyPrintOne} from 'code-prettify'
import * as T from "prop-types"
import './styles.scss';
import {cssClassName} from 'utils'
const cn = cssClassName('A_Code')


const A_Code = ({mix, codeString, language, linenums}) => {

  const codeData = prettyPrintOne(codeString, language, linenums)

  return (
    <code
      className={cn([mix])}
      dangerouslySetInnerHTML={{__html: codeData}}
    />
  )
}


A_Code.propTypes = {
  mix: T.string, //BEM mixin from parent block
  codeSting: T.string.isRequired, //code string for snippet
  language: T.string, //set code language manually, default: automatic detection
  linenums: T.bool, // sets string numeration, default: true
};

A_Code.defaultProps = {
  language: null,
  linenums: true,
}

export default A_Code;