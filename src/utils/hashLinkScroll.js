export function hashLinkScroll() {
  const { hash } = window.location;
  if (hash !== '') {
    setTimeout(() => {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({block: 'start', behavior: 'smooth' });
      }
    }, 0);
  } else {
    window.scrollTo(0, 0)
  }
}