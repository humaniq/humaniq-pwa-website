export default function () {
  setTimeout(() => {
    const els = document.getElementsByClassName('progress');
    els[0].style.height = 0;
  }, 700)
}