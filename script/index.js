// Theme toggle
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

function setTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
  themeIcon.textContent = theme === 'dark' ? '🌙' : '☀️';
}

function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  setTheme(currentTheme === 'dark' ? 'light' : 'dark');
}

themeToggle.addEventListener('click', toggleTheme);

// On load theme from localStorage
(function () {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    setTheme(savedTheme);
  } else {
    setTheme(prefersDark ? 'dark' : 'light');
  }
})();

const menuToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

// Navegation Menu
menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

document.addEventListener('click', (e) => {
  if (!navLinks.contains(e.target) && !menuToggle.contains(e.target)) {
    navLinks.classList.remove('open');
  }
});

navLinks.addEventListener('click', (e) => {
  if (e.target.tagName === 'A') {
    navLinks.classList.remove('open');
  }
});

// Footer year
// document.getElementById('year').textContent = new Date().getFullYear();

// Language Switch
const translations = {
  en: {
    about_greet: "Hello👋, I'm <span class='highlight'>Amaru</span>",
    about_desc: "A passionate <span class='field-highlight'>software engineer</span> specialising in web technologies. I love building scalable, performant, and accessible applications that make a difference.",
    skills_title: "Skills",
    skills: [
      "JavaScript (ES6+)",
      "TypeScript",
      "HTML5 & CSS3",
      "Python",
      "SQlite",
      "Django",
      "Java",
      "REST APIs",
      "Accessibility",
      "Testing (Jest, Cypress)",
      "CI/CD & DevOps basics"
    ],
    projects_title: "Projects",
    project1_title: "Project One",
    project1_desc: "...",
    project2_title: "Project Two",
    project2_desc: "...",
    project3_title: "Project Three",
    project3_desc: "...",
    view_project: "View Project",
    experience_title: "Experience",
    exp1_date: "2023 - Present",
    exp1_title: "Senior Web Engineer",
    exp1_desc: "Company Name - Leading development of scalable web platforms, mentoring junior engineers, and architecting front-end solutions.",
    exp2_date: "2021 - 2023",
    exp2_title: "Web Developer",
    exp2_desc: "Company Name - Built feature-rich apps with React and Node.js for high-traffic clients.",
    contact_title: "Contact",
    contact_name: "Name",
    contact_email: "Email",
    contact_message: "Message",
    contact_send: "Send",
    footer: "Your Name &mdash; Advanced Web Engineer Portfolio"
  },
  qh: {
    about_greet: "Jay👋, Ñuqa <span class='highlight'>Amarum</span> kani",
    about_desc: "Juk munayniyuq <span class='field-highlight'>suphwar injiñiru</span> web tiknulujiyakunawanmi aswan kamayniyuq. Chay wakjinaq jatunyachikuq, allin llamk'akuq, mana sasa llamk'achikunapaq appkunata ruwayyachani.",
    skills_title: "Yachasqakuna",
    skills: [
      "JavaScript (ES6+)",
      "TypeScript",
      "HTML5 & CSS3",
      "React / Vue / Svelte",
      "Node.js",
      "Next.js / Nuxt.js",
      "REST & GraphQL APIs",
      "Web Performance",
      "Accessibility (a11y)",
      "Testing (Jest, Cypress)",
      "CI/CD & DevOps basics",
      "UX/UI Design"
    ],
    projects_title: "Llamk'asqakuna",
    project1_title: "Na ruyiktu",
    project1_desc: "...",
    project2_title: "Na ruyiktu",
    project2_desc: "...",
    view_project: "Ruyiktuta Qhaway",
    experience_title: "Llamk'aypi puquy",
    exp1_date: "2023 - Kunan",
    exp1_title: "Senior Web Enginer - Na Kumpaniya",
    exp1_desc: "...",
    exp2_date: "2021 - 2023",
    exp2_title: "Junior Web Engineer - Na Kumpaniya",
    exp2_desc: "...",
    contact_title: "Qillqanakunapaq",
    contact_name: "Jinantin Suti",
    contact_email: "Illariy Chaski",
    contact_message: "Qillqa",
    contact_send: "Apachiy",
    footer: "&copy; 2025 Amaru. Tukuy lirichusqa waqaychachikusqam kachkanku."
  }
};
const langSelect = document.getElementById('lang-select');
const supportedLangs = ['en', 'qh'];
let currentLang = localStorage.getItem('lang') || 'en';

function updateLanguage() {
  // data-i18n elements update
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[currentLang] && translations[currentLang][key]) {
      el.innerHTML = translations[currentLang][key];
    }
  });
  langSelect.value = currentLang;
}

langSelect.addEventListener('change', () => {
  currentLang = langSelect.value;
  localStorage.setItem('lang', currentLang);
  updateLanguage();
});

window.addEventListener('DOMContentLoaded', () => {
  currentLang = localStorage.getItem('lang') || 'en';
  langSelect.value = currentLang;
  updateLanguage();
});

// Contact Form Submission *To be implemented 
document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();
  const status = document.getElementById('form-status');
  status.textContent = currentLang === 'en' ? 'Sending...' : "...apachkan.";
  setTimeout(() => {
    status.textContent = currentLang === 'en' ? 'Thank you! Your message has been sent for demo only😂.' : "Pachiykuyki! Kacha qillqaykiqam chaskikunña.";
    this.reset();
    setTimeout(() => (status.textContent = ''), 3500);
  }, 1500);
});