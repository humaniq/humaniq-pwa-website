export default function () {
  setTimeout(() => {
    const els = document.getElementsByClassName('progress');
    els[0].style.height = 0;
    setTimeout(() => {
      els[0].style.display = 'none';
    }, 500)
  }, 2000)
}