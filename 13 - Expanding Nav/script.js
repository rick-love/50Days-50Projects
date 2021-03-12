const toggleNav = document.getElementById('toggleNav');
const nav = document.getElementById('nav');

toggleNav.addEventListener('click', () => {
  nav.classList.toggle('active');
});

