
export function getDelta(slidesWidths, show){
  let k = -1
  if(show < 0){
    show = -show
    slidesWidths = [...slidesWidths].reverse()
    k = 1
  }
  let delta = 0


  if(show >= slidesWidths.length){
    delta = slidesWidths.reduce((a, b) => a + b, 0) * (show/slidesWidths.length|0)
    show = show%slidesWidths.length
  }

  for (let i = 0; i < show; i++){
    delta += slidesWidths[i]
  }
  return delta * k
}

export function indexOfShow(slidesCount, show){
  const extended_index = show%slidesCount
  if(extended_index < 0 ){
    return slidesCount + extended_index
  } else {
    return extended_index
  }
}

export function findIndexOfRedundantSlide(slidesCount, show, slidesWidths, width_container){
  const first_index_of_slides = indexOfShow(slidesCount, show)
  let i_last = first_index_of_slides
  for (
    let slidesLengh = 0;
    slidesLengh < width_container;
    i_last++
  ) {
    slidesLengh += slidesWidths[indexOfShow(slidesCount, i_last)]
  }
  return (indexOfShow(slidesCount, i_last - 1) )
}


export function pairSplit(arr, title){
  const entities = [];

  for(let i = 0; i < arr.length; i += 2){
    entities.push(arr.slice(i, i + 2));
  }
  return ({
    title,
    entities
  })
}