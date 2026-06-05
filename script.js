/* =====================================================================
   Arkala Sai Vikas — Data Portfolio
   ---------------------------------------------------------------------
   EDIT GUIDE
   - PROJECTS : your projects (only live:true ones show)
   - SKILLS   : skill bars (the % values are YOUR self-assessment — change freely)
   - CONTACT_EMAIL : where the contact form sends to
   ===================================================================== */

const CONTACT_EMAIL = "arkalasaivikas20@gmail.com";

/* ----------------------------- Projects ----------------------------- */
const PROJECTS = [
  {
    live: true,
    title: "Customer Behavior Analysis — SQL · Python · Power BI",
    category: "Data Analytics / BI",
    summary:
      "End-to-end retail analytics: clean and explore shopping data in Python, load it into " +
      "PostgreSQL, answer 10 business questions in SQL, and surface the findings in an interactive " +
      "Power BI dashboard covering revenue, segments, seasons, and discount impact.",
    proves: "The complete Data Analyst loop — query, clean, analyze, visualize, and turn it into recommendations.",
    stack: ["Python", "Pandas", "Seaborn", "PostgreSQL", "SQLAlchemy", "SQL", "Power BI"],
    repo: "https://github.com/Arkala20/customer-trends-data-analysis-SQL-Python-PowerBI-main",
    demo: null,
    image: null
  },
  {
    live: true,
    title: "Real-Time Data Pipeline — AWS · Apache NiFi · Snowflake",
    category: "Data Engineering",
    summary:
      "A near real-time pipeline: Python Faker generates customer files, Apache NiFi moves them to " +
      "Amazon S3, Snowpipe auto-loads into a Snowflake staging table, and a scheduled Snowflake Task " +
      "merges them into the final table using SCD Type 1. Validated end-to-end on 10,000 records.",
    proves: "Cloud data-engineering fundamentals: ingestion, staging, automated loading, scheduled processing.",
    stack: ["AWS S3", "EC2", "Docker", "Apache NiFi", "Snowflake", "Snowpipe", "SQL"],
    repo: "https://github.com/Arkala20/Real-Time-Data-Analytics-Pipeline-using-AWS-Apache-NiFi-and-Snowflake-main",
    demo: null,
    image: "https://raw.githubusercontent.com/Arkala20/Real-Time-Data-Analytics-Pipeline-using-AWS-Apache-NiFi-and-Snowflake-main/master/images/Architecture.png"
  },
  {
    live: true,
    title: "Telecom Customer Churn Prediction with Generative AI Insights",
    category: "Data Analytics · ML",
    summary:
      "An XGBoost model that predicts telecom churn, paired with a Generative AI helper that turns each " +
      "prediction into a plain-language retention strategy. Datasets export ready for Power BI and Tableau.",
    proves: "Modeling plus the BI handoff — turning a model's output into something a business team can act on.",
    stack: ["Python", "XGBoost", "scikit-learn", "Pandas", "Generative AI", "Power BI / Tableau export"],
    repo: "https://github.com/Arkala20/Telecom-Customer-Churn-Prediction-with-Generative-AI-Insights",
    demo: null,
    image: null
  },
  {
    live: true,
    title: "GaragePulse — Auto Service Management System",
    category: "SQL / Database · Python App",
    summary:
      "A desktop service-management app (Python Tkinter + MySQL) with a clean layered architecture — " +
      "controllers, services, repository data-access — covering customers, vehicles, work orders, " +
      "invoicing, and a reporting/analytics dashboard.",
    proves: "Relational database design and a real reporting layer, structured the way production systems do.",
    stack: ["Python", "MySQL", "Tkinter", "Pandas", "matplotlib", "Layered architecture"],
    repo: "https://github.com/Arkala20/garagepulse_service",
    demo: null,
    image: "https://raw.githubusercontent.com/Arkala20/garagepulse_service/master/docs/dashboard.png"
  }
];

/* ----------------------------- Skills (self-rated %) ----------------------------- */
/* These percentages are a personal comfort estimate — set them to whatever you want. */
const SKILLS = [
  { name: "SQL",                level: 90 },
  { name: "Python (Pandas/NumPy)", level: 85 },
  { name: "Power BI",           level: 85 },
  { name: "Tableau",            level: 75 },
  { name: "ETL / ELT",          level: 80 },
  { name: "Snowflake",          level: 70 },
  { name: "PostgreSQL / MySQL", level: 82 },
  { name: "PySpark / Spark",    level: 65 }
];

/* ----------------------------- Render projects ----------------------------- */
function renderProjects() {
  const grid = document.getElementById("projectGrid");
  if (!grid) return;
  const visible = PROJECTS.filter(p => p.live);

  grid.innerHTML = visible.map(p => {
    const thumb = p.image
      ? `<img src="${p.image}" alt="${esc(p.title)} preview" loading="lazy"
              onerror="this.style.display='none'; this.nextElementSibling.style.display='grid';" />
         <div class="pcard__thumb-fallback" style="display:none"><span>Screenshot coming soon</span></div>`
      : `<div class="pcard__thumb-fallback"><span>Screenshot coming soon</span></div>`;
    const stack = p.stack.map(s => `<li>${esc(s)}</li>`).join("");
    const demo = p.demo
      ? `<a class="pcard__link" href="${p.demo}" target="_blank" rel="noopener">Live demo &rarr;</a>`
      : `<span class="pcard__link pcard__link--muted">Live demo n/a</span>`;
    return `
      <article class="pcard reveal">
        <div class="pcard__thumb"><span class="pcard__cat">${esc(p.category)}</span>${thumb}</div>
        <div class="pcard__body">
          <h3 class="pcard__title">${esc(p.title)}</h3>
          <p class="pcard__summary">${esc(p.summary)}</p>
          <ul class="pcard__stack">${stack}</ul>
          <p class="pcard__proves"><b>What it shows:</b> ${esc(p.proves)}</p>
          <div class="pcard__actions">
            <a class="pcard__link" href="${p.repo}" target="_blank" rel="noopener">View code &rarr;</a>
            ${demo}
          </div>
        </div>
      </article>`;
  }).join("");
}

/* ----------------------------- Render skills ----------------------------- */
function renderSkills() {
  const grid = document.getElementById("skillGrid");
  if (!grid) return;
  grid.innerHTML = SKILLS.map(s => `
    <div class="skill reveal">
      <div class="skill__top">
        <span class="skill__name">${esc(s.name)}</span>
        <span class="skill__pct">${s.level}%</span>
      </div>
      <div class="skill__bar"><span class="skill__fill" data-level="${s.level}"></span></div>
    </div>`).join("");
}

function animateSkillBars() {
  const fills = document.querySelectorAll(".skill__fill");
  if (!("IntersectionObserver" in window)) {
    fills.forEach(f => f.style.width = f.dataset.level + "%");
    return;
  }
  const obs = new IntersectionObserver((entries, o) => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.style.width = e.target.dataset.level + "%"; o.unobserve(e.target); }
    });
  }, { threshold: 0.4 });
  fills.forEach(f => obs.observe(f));
}

/* ----------------------------- Animated stat counters ----------------------------- */
function animateCounters() {
  const nums = document.querySelectorAll(".stat__num");
  const run = el => {
    const target = parseFloat(el.dataset.target);
    const decimals = parseInt(el.dataset.decimals || "0", 10);
    const dur = 1200; const start = performance.now();
    const tick = now => {
      const t = Math.min((now - start) / dur, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      el.textContent = (target * eased).toFixed(decimals);
      if (t < 1) requestAnimationFrame(tick);
      else el.textContent = target.toFixed(decimals);
    };
    requestAnimationFrame(tick);
  };
  if (!("IntersectionObserver" in window)) { nums.forEach(run); return; }
  const obs = new IntersectionObserver((entries, o) => {
    entries.forEach(e => { if (e.isIntersecting) { run(e.target); o.unobserve(e.target); } });
  }, { threshold: 0.6 });
  nums.forEach(n => obs.observe(n));
}

/* ----------------------------- Contact form (mailto, no backend) ----------------------------- */
function initContactForm() {
  const form = document.getElementById("contactForm");
  if (!form) return;
  const note = document.getElementById("cfNote");
  form.addEventListener("submit", e => {
    e.preventDefault();
    const name = val("cfName"), email = val("cfEmail"),
          subject = val("cfSubject"), message = val("cfMessage");
    if (!name || !email || !message) {
      note.textContent = "Please fill in your name, email, and a message.";
      note.style.color = "#ffb4a2";
      return;
    }
    const subj = subject ? subject : `Portfolio enquiry from ${name}`;
    const body = `${message}\n\n— ${name}\n${email}`;
    window.location.href =
      `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subj)}&body=${encodeURIComponent(body)}`;
    note.textContent = "Opening your email app…";
    note.style.color = "#6fd3bc";
    form.reset();
  });
}
function val(id) { const el = document.getElementById(id); return el ? el.value.trim() : ""; }

/* ----------------------------- Nav ----------------------------- */
function initNav() {
  const toggle = document.getElementById("navToggle");
  const links = document.getElementById("navLinks");
  if (!toggle || !links) return;
  toggle.addEventListener("click", () => {
    const open = links.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(open));
  });
  links.querySelectorAll("a").forEach(a =>
    a.addEventListener("click", () => {
      links.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    })
  );
}

/* ----------------------------- Scroll reveal ----------------------------- */
function observeReveals() {
  const items = document.querySelectorAll(".reveal:not(.is-visible)");
  if (!("IntersectionObserver" in window)) { items.forEach(el => el.classList.add("is-visible")); return; }
  const obs = new IntersectionObserver((entries, o) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("is-visible"); o.unobserve(e.target); } });
  }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
  items.forEach(el => obs.observe(el));
}

/* ----------------------------- Util ----------------------------- */
function esc(str) {
  return String(str).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}

/* ----------------------------- Init ----------------------------- */
document.addEventListener("DOMContentLoaded", () => {
  const y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();
  renderProjects();
  renderSkills();
  initNav();
  initContactForm();
  observeReveals();
  animateSkillBars();
  animateCounters();
});
