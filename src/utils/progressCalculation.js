export function bounceOut(x) {
  var n1 = 7.5625,
    d1 = 2.75;
  if (x < 1 / d1) {
    return n1 * x * x;
  } else if (x < 2 / d1) {
    return n1 * (x -= 1.5 / d1) * x + .75;
  } else if (x < 2.5 / d1) {
    return n1 * (x -= 2.25 / d1) * x + .9375;
  } else {
    return n1 * (x -= 2.625 / d1) * x + .984375;
  }
}

export default function () {
  const els = document.getElementsByClassName('determinate');
  let x = 0.3
  const xRefreshInterval = setInterval(() => {
    x = bounceOut(x)
    els[0].style.width = `${Math.round(x * 100)}%`;
    if (x > 0.999) {
      clearInterval(xRefreshInterval);
      setTimeout(() => {
        const els = document.getElementsByClassName('progress');
        els[0].style.height = 0;
      }, 100)
    }
  }, 60)
}