function toggleNav() {
  document.getElementById('header-nav').classList.toggle('hidden-nav');
}

document.getElementById('mobile-btn').addEventListener('click', toggleNav);
document.getElementById('close-nav-btn').addEventListener('click', toggleNav);