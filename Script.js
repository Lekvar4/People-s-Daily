// Hamburger Menu Toggle
document.getElementById('menu-icon').addEventListener('click', () => {
    const navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('show');
  });
  
  // Submit News Form
  document.getElementById('news-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const title = document.getElementById('news-title').value;
    const description = document.getElementById('news-description').value;
    const writer = document.getElementById('news-writer').value;
  
    alert(`Thank you, ${writer}! Your news has been submitted.`);
    document.getElementById('news-form').reset();
  });
  
  // Hamburger Menu Toggle
  document.getElementById('menu-icon').addEventListener('click', () => {
    const navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('show');
  });
  
  // Submit News Form
  document.getElementById('news-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const title = document.getElementById('news-title').value;
    const description = document.getElementById('news-description').value;
    const writer = document.getElementById('news-writer').value;
  
    alert(`Thank you, ${writer}! Your news has been submitted.`);
    document.getElementById('news-form').reset();
  });
  
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
  