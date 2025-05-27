const toggleButton = document.getElementById('toggle-theme');
const body = document.body;
// Check for saved user preference modified
// Check for saved user preference modified after HTTPS Fix
// Check for saved user preference modified 3
// Check for saved user preference
if (localStorage.getItem('theme') === 'dark') {
  body.classList.add('dark-mode');
}

// Toggle dark mode on click
toggleButton.addEventListener('click', () => {
  body.classList.toggle('dark-mode');

  // Save user preference
  if (body.classList.contains('dark-mode')) {
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.setItem('theme', 'light');
  }
});
