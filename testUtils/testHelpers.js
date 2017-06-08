export const inlineStyleParser = (styleInput = '') => {

  const
    style = {},
    attributes = styleInput.split(';');

  for (let i = 0; i < attributes.length; i++) {
    const
      entry = attributes[i].split(':'),
      cssAttribute = entry.splice(0,1)[0].trim(),
      cssValue = entry.join(':').trim()

    if (cssAttribute)
      style[cssAttribute] = cssValue;
  }
  return style
}