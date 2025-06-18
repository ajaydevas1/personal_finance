// Show login modal when page loads
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('login-modal').style.display = 'flex';
});

// Switch between login and signup modals
document.getElementById('show-signup').addEventListener('click', function(e) {
  e.preventDefault();
  document.getElementById('login-modal').style.display = 'none';
  document.getElementById('signup-modal').style.display = 'flex';
});

document.getElementById('show-login').addEventListener('click', function(e) {
  e.preventDefault();
  document.getElementById('signup-modal').style.display = 'none';
  document.getElementById('login-modal').style.display = 'flex';
});

// Form submission handlers
document.getElementById('login-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const email = document.getElementById('login-email').value;
  const password = document.getElementById('login-password').value;
  
  // Simple validation
  if (!email || !password) {
    alert('Please enter both email and password');
    return;
  }
  
  // Extract first name from email
  let firstName = email.split('@')[0];
  firstName = firstName.charAt(0).toUpperCase() + firstName.slice(1);
  
  // Update welcome message
  document.getElementById('welcome-header').textContent = `Welcome, ${firstName}!`;
  
  // Update profile info
  document.getElementById('profile-name').textContent = firstName + ' Madara';
  document.getElementById('profile-email').textContent = email;
  
  // Switch to dashboard view
  document.getElementById('login-modal').style.display = 'none';
  document.getElementById('dashboard-page').style.display = 'block';
});

document.getElementById('signup-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const name = document.getElementById('signup-name').value;
  const email = document.getElementById('signup-email').value;
  const password = document.getElementById('signup-password').value;
  const confirmPassword = document.getElementById('signup-confirm').value;
  
  // Validation
  if (!name || !email || !password || !confirmPassword) {
    alert('Please fill all fields');
    return;
  }
  
  if (password !== confirmPassword) {
    alert('Passwords do not match');
    return;
  }
  
  // Extract first name
  const firstName = name.split(' ')[0];
  
  // Update welcome message
  document.getElementById('welcome-header').textContent = `Welcome, ${firstName}!`;
  
  // Update profile info
  document.getElementById('profile-name').textContent = name;
  document.getElementById('profile-email').textContent = email;
  
  // Switch to dashboard view
  document.getElementById('signup-modal').style.display = 'none';
  document.getElementById('dashboard-page').style.display = 'block';
});

// Tab switching function
function switchTab(tabId) {
  const sections = ['home', 'transactions', 'budget', 'wallets', 'profile'];
  sections.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.style.display = (id === tabId || (tabId === 'home' && (id === 'transactions' || id === 'budget'))) ? 'block' : 'none';
  });
}