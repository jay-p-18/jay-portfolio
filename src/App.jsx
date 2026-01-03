import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { useState } from "react";
import { useEffect } from "react";
export default function App() {
  const [dark, setDark] = useState(false);
useEffect(() => {
  const elements = document.querySelectorAll(".fade-in");
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    },
    { threshold: 0.2 }
  );
 elements.forEach(el => observer.observe(el));
}, []);
  return (
    <div className={dark ? "app dark" : "app"}>
      <button className="dark-toggle" onClick={() => setDark(!dark)}>
        {dark ? "☀ Light Mode" : "🌙 Dark Mode"}
      </button>
      <Header />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
    </div>
  );
}
function Header() {
 return (
    <section className="section hero">
      <h1>Jayaprakash Besolla</h1>
      <h2>Frontend Developer | React.js</h2>

      <p>
        Frontend Developer specializing in React.js, JavaScript, and REST APIs.
        Experienced in building responsive, scalable web applications with clean UI
        and real-world functionality.
      </p>

      <div className="buttons">
        <a href="#projects" className="btn">View Projects</a>
        <a href="/resume.pdf" className="btn outline">Download Resume</a>
      </div>
    </section>
  );
}
function Skills() {
  return (
    <section className="section">
      <h3>Skills</h3>
      <div className="grid">
        <div>
          <h4>Frontend</h4>
          <p>HTML, CSS, JavaScript, React.js</p>
        </div>
        <div>
          <h4>APIs & Backend</h4>
          <p>REST APIs, Basic Spring Boot</p>
        </div>
        <div>
          <h4>Tools</h4>
          <p>Git, GitHub, VS Code</p>
        </div>
      </div>
    </section>
  );
}
function Projects() {
  return (
    <section className="section" id="projects">
      <h3>Projects</h3>

      <div className="grid">
        <div className="card fade-in">
          <h4>AI-Based Job Search Platform</h4>
          <p>
            React-based job search app with real-time API integration,
            filters, pagination, and responsive UI.
          </p>
          <p><strong>Tech:</strong> React, JavaScript, REST APIs</p>
        </div>

        <div className="card fade-in">
          <h4>E-Commerce Frontend Application</h4>
          <p>
            Dynamic product listing and cart functionality with reusable
            components and mobile-first design.
          </p>
          <p><strong>Tech:</strong> React, REST APIs</p>     
        </div>
       <div className="card fade-in">
          <h4>Amazon Clone</h4>
          <p>
            Responsive Amazon-style UI built during internship focusing
            on layout and navigation.
          </p>
          <p><strong>Tech:</strong> HTML, CSS, JavaScript</p>  
        </div>
      </div>
    </section>
  );
}
function Experience() {
  return (
    <section className="section">
      <h3>Experience</h3>
      <div className="card">
        <h4>Web Development Intern – CodSoft</h4>
        <p>Aug 2023 – Sep 2024</p>
      </div>
    </section>
  );
}
function Contact() {
  return (
    <section className="section">
      <h3>Contact</h3>
      <p>Email: besollajayprakash@gmail.com</p>
      <p>LinkedIn: Besolla Jayaprakash</p>
      
      <p>
🔗 <a href="https://linkedin.com/in/jayprakashbesolla/" target="_blank">
LinkedIn Profile
</a>
</p>
    </section>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

