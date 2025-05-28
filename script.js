// Theme toggle
const themeToggle = document.getElementById('themeToggle');
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  themeToggle.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
});

// Example blog posts (dynamic, can be replaced with your own)
const blogPosts = [
  {
    title: "Why Simplicity Wins in Design",
    summary: "Exploring the power of minimalism and clarity in digital products.",
    url: "#"
  },
  {
    title: "Lessons from Building My Portfolio",
    summary: "The challenges and joys of crafting a personal website from scratch.",
    url: "#"
  }
];

const blogList = document.getElementById('blogList');
blogPosts.forEach(post => {
  const card = document.createElement('div');
  card.className = 'blog-card';
  card.innerHTML = `<h4>${post.title}</h4><p>${post.summary}</p>`;
  card.onclick = () => window.open(post.url, '_blank');
  blogList.appendChild(card);
});

// Contact form (demo only)
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Thanks for reaching out! I will get back to you soon.');
  this.reset();
});
