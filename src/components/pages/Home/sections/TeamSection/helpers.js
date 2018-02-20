export function getDelta(slidesWidths, show) {
  let k = -1
  if (show < 0) {
    show = -show
    slidesWidths = [...slidesWidths].reverse()
    k = 1
  }
  let delta = 0

  if (show >= slidesWidths.length) {
    delta = slidesWidths.reduce((a, b) => a + b, 0) * ((show / slidesWidths.length) | 0)
    show = show % slidesWidths.length
  }

  for (let i = 0; i < show; i++) {
    delta += slidesWidths[i]
  }
  return delta * k
}

export function _indexOfShow(slidesCount, show) {
  const extended_index = show % slidesCount
  if (extended_index < 0) {
    return slidesCount + extended_index + 1
  } else{
    return extended_index + 1
  }
}

export function indexOfShow(slidesCount, show){
  const extended_index = show%slidesCount
  if(extended_index < 0 ){
    return slidesCount + extended_index
  } else {
    return extended_index
  }
}


export function findIndexOfRedundantSlide(slidesCount, show, slidesWidths, width_container) {
  const first_index_of_slides = indexOfShow(slidesCount, show)
  let i_last = first_index_of_slides
  for (let slidesLengh = 0; slidesLengh < width_container; i_last++) {
    console.log(slidesLengh)
    slidesLengh += slidesWidths[indexOfShow(slidesCount, i_last)]
  }
  console.log({slidesWidths})
  return indexOfShow(slidesCount, i_last - 1)
}

export function findIndexesOfRedundantSlides(slidesCount, show, slidesWidths, width_container = 0) {
  const first_index_of_slides = indexOfShow(slidesCount, show)
  let
    slidesLengh = 0,
    previousLength = 0,
    i_last = first_index_of_slides
  for (slidesLengh = 0; slidesLengh < width_container; i_last++) {
    previousLength = slidesLengh
    slidesLengh = previousLength + slidesWidths[indexOfShow(slidesCount, i_last)]
  }
  console.log({width_container, previousLength, slidesLengh, i_last})
  const padding = width_container ? (width_container - previousLength)/2 : '0'
  return ({
    arr: [
      _indexOfShow(slidesCount, first_index_of_slides - 1),
      _indexOfShow(slidesCount, first_index_of_slides - 2),
      _indexOfShow(slidesCount, i_last - 1),
      _indexOfShow(slidesCount, i_last ),
    ],
    padding: padding
  })
}

export function pairSplit(arr, title) {
  const entities = []

  for (let i = 0; i < arr.length; i += 2) {
    entities.push(arr.slice(i, i + 2))
  }
  return {
    title,
    entities,
  }
}
