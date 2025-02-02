// Hamburger Menu Toggle
document.addEventListener('DOMContentLoaded', () => {
  const menuIcon = document.getElementById('menu-icon');
  const navLinks = document.getElementById('nav-links');

  menuIcon.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });

  const newsForm = document.getElementById('news-form');
  newsForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('News submitted successfully!');
    newsForm.reset();
  });
});