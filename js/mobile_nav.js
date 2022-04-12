function toggleNav() {
  document.getElementById('header-nav').classList.toggle('hidden-nav');
}

document.getElementById('mobile-btn').addEventListener('click', toggleNav);
document.getElementById('close-nav-btn').addEventListener('click', toggleNav);


let navLi = document.querySelectorAll('#nav-list li');
let sections = document.querySelectorAll('section');

window.onscroll = () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 800;
    if (scrollY >= sectionTop ) {
      current = section.getAttribute("id"); }
  });

  navLi.forEach((li) => {
    li.children[0].classList.remove("active");
    if (li.children[0].classList.contains(current)) {
      li.children[0].classList.add("active");
    }
  });
};