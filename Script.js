document.addEventListener('DOMContentLoaded', () => {
  const menuIcon = document.getElementById('menu-icon');
  const navLinks = document.getElementById('nav-links');

  // Toggle navigation menu on mobile
  menuIcon.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });

  const newsForm = document.getElementById('news-form');
  newsForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('News submitted successfully!');
    newsForm.reset();
  });

  // Handle like button click
  document.querySelectorAll('.like-btn').forEach(button => {
    button.addEventListener('click', function() {
      const likeCount = this.querySelector('.like-count');
      const dislikeButton = this.nextElementSibling;
      const dislikeCount = dislikeButton.querySelector('.dislike-count');
      if (this.classList.contains('liked')) {
        likeCount.textContent = parseInt(likeCount.textContent) - 1;
        this.classList.remove('liked');
      } else {
        likeCount.textContent = parseInt(likeCount.textContent) + 1;
        this.classList.add('liked');
        if (dislikeButton.classList.contains('disliked')) {
          dislikeCount.textContent = parseInt(dislikeCount.textContent) - 1;
          dislikeButton.classList.remove('disliked');
        }
      }
    });
  });

  // Handle dislike button click
  document.querySelectorAll('.dislike-btn').forEach(button => {
    button.addEventListener('click', function() {
      const dislikeCount = this.querySelector('.dislike-count');
      const likeButton = this.previousElementSibling;
      const likeCount = likeButton.querySelector('.like-count');
      if (this.classList.contains('disliked')) {
        dislikeCount.textContent = parseInt(dislikeCount.textContent) - 1;
        this.classList.remove('disliked');
      } else {
        dislikeCount.textContent = parseInt(dislikeCount.textContent) + 1;
        this.classList.add('disliked');
        if (likeButton.classList.contains('liked')) {
          likeCount.textContent = parseInt(likeCount.textContent) - 1;
          likeButton.classList.remove('liked');
        }
      }
    });
  });

  // Handle share button click
  document.querySelectorAll('.share-btn').forEach(button => {
    button.addEventListener('click', function() {
      const link = this.getAttribute('data-link');
      const category = this.getAttribute('data-category');
      const shareText = `Check out this post from the ${category} category: ${link}`;
      navigator.clipboard.writeText(shareText).then(() => {
        alert('Link and category copied to clipboard!');
      }).catch(err => {
        console.error('Failed to copy link: ', err);
      });
    });
  });
});
