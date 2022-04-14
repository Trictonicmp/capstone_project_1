function toggleNav() {
  document.getElementById('header-nav').classList.toggle('hidden-nav');
}

document.getElementById('mobile-btn').addEventListener('click', toggleNav);
document.getElementById('close-nav-btn').children[0].addEventListener('click', toggleNav);
