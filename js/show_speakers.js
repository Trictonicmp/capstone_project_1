function showSpeakers() {
  document.querySelector('.speakers-cards-container').classList.remove('speakers-hidden');
  document.getElementById('see-more-speakers').style.opacity = 0;  
}

document.getElementById('see-more-speakers').addEventListener('click', showSpeakers);