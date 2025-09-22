// Save this as script.js
document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const name = document.getElementById('name').value;
  alert(`Thank you for your message, ${name}!`);
});
