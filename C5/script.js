window.addEventListener('scroll', function() {
    if (window.pageYOffset > 100) {
      document.querySelector('.back-to-top').style.display = 'block';
      document.querySelector('.back-to-landing').style.display = 'block';
    } else {
      document.querySelector('.back-to-top').style.display = 'none';
      document.querySelector('.back-to-landing').style.display = 'none';
    }
  });


