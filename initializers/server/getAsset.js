import { MANIFEST_NAME, OUTPUT_PATH } from '../webpack/_consts'

let assetPath

if (__DEVELOPMENT__){
  assetPath = (asset, extension) => (
    `assets/${asset}.${extension}`
  );
}else {
  const fs = require('fs')
  const path = require('path')

  const manifestPath = path.join(OUTPUT_PATH, MANIFEST_NAME)

  const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'))

  assetPath = (asset, extension) => manifest[`${asset}.${extension}`]
}

export default assetPath
