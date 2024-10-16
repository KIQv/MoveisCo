document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    document.getElementById('formMessage').innerHTML = 'Thank you for your message!';
  });
  