const progress = document.querySelector('.progress span');
const glow = document.querySelector('.cursor-glow');
const navLinks = [...document.querySelectorAll('.nav a')];
const sections = [...document.querySelectorAll('main section, footer')];
const revealItems = document.querySelectorAll('.reveal');
const menu = document.querySelector('.nav');
const menuBtn = document.querySelector('.menu-btn');
const header = document.querySelector('.site-header');

window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', scrollY > 12);
  const max = document.documentElement.scrollHeight - innerHeight;
  progress.style.width = `${(scrollY / max) * 100}%`;
  let current = 'home';
  sections.forEach(section => {
    if (scrollY >= section.offsetTop - 180) current = section.id;
  });
  navLinks.forEach(link => link.classList.toggle('active', link.getAttribute('href') === `#${current}`));
});

document.addEventListener('pointermove', e => {
  glow.style.left = `${e.clientX}px`;
  glow.style.top = `${e.clientY}px`;
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: .12 });
revealItems.forEach(item => observer.observe(item));

menuBtn.addEventListener('click', () => menu.classList.toggle('open'));
navLinks.forEach(link => link.addEventListener('click', () => menu.classList.remove('open')));

document.querySelectorAll('.magnetic').forEach(el => {
  el.addEventListener('mousemove', e => {
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left - r.width / 2) * .12;
    const y = (e.clientY - r.top - r.height / 2) * .12;
    el.style.transform = `translate(${x}px, ${y}px)`;
  });
  el.addEventListener('mouseleave', () => el.style.transform = 'translate(0,0)');
});

const track = document.querySelector('[data-slider]');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');
if (track && nextBtn && prevBtn) {
  nextBtn.addEventListener('click', () => track.scrollBy({left: track.clientWidth * .72, behavior:'smooth'}));
  prevBtn.addEventListener('click', () => track.scrollBy({left: -track.clientWidth * .72, behavior:'smooth'}));
  track.addEventListener('keydown', e => {
    if (e.key === 'ArrowRight') nextBtn.click();
    if (e.key === 'ArrowLeft') prevBtn.click();
  });
  track.tabIndex = 0;
}

document.getElementById('year').textContent = new Date().getFullYear();
