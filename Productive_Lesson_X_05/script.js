const navLinks = document.querySelectorAll('.nav a');
const sectionIds = ['floor-01', 'floor-02', 'floor-03', 'floor-04'];

function setActiveNav(sectionId) {
  navLinks.forEach((link) => {
    const target = link.getAttribute('href').slice(1);
    link.classList.toggle('active', target === sectionId);
  });
}

function getCurrentSection() {
  const scrollPosition = window.scrollY + window.innerHeight * 0.2;
  const floor01 = document.getElementById('floor-01');
  if (!floor01 || scrollPosition < floor01.offsetTop) {
    return 'lobby';
  }

  for (let i = sectionIds.length - 1; i >= 0; i--) {
    const section = document.getElementById(sectionIds[i]);
    if (!section) continue;
    if (scrollPosition >= section.offsetTop) {
      return sectionIds[i];
    }
  }

  return 'lobby';
}

function updateActiveOnScroll() {
  const activeSection = getCurrentSection();
  setActiveNav(activeSection);
}

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.forEach((nav) => nav.classList.remove('active'));
    link.classList.add('active');
  });
});

window.addEventListener('scroll', updateActiveOnScroll);
window.addEventListener('load', updateActiveOnScroll);
window.addEventListener('resize', updateActiveOnScroll);
