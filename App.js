// Scroll reveal for work cards
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => { if(e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold:0.15 });
document.querySelectorAll('.work-card').forEach(c => observer.observe(c));

// Services accordion
document.querySelectorAll('.service-item').forEach(item => {
  item.querySelector('.service-header').addEventListener('click', () => {
    const isActive = item.classList.contains('active');
    // Close all
    document.querySelectorAll('.service-item').forEach(i => i.classList.remove('active'));
    // Open clicked if it was closed
    if (!isActive) item.classList.add('active');
  });
});