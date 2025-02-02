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
  
document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.getElementById("menu-icon");
    const navLinks = document.getElementById("nav-links");

    if (menuIcon && navLinks) {
        menuIcon.addEventListener("click", function () {
            navLinks.classList.toggle("show"); // Make sure "show" is used in CSS
        });
    }

    const newsForm = document.getElementById("news-form");
    if (newsForm) {
        newsForm.addEventListener("submit", function (e) {
            e.preventDefault();
            const writer = document.getElementById("news-writer").value;
            alert(`Thank you, ${writer}! Your news has been submitted.`);
            newsForm.reset();
        });
    }
});