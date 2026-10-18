export default function About() {
  return (
    <section id="about" className="section">
      <div className="container about-grid">
        <div>
          <p className="eyebrow">03 / A LITTLE ABOUT ME</p>
          <h2>
            Curious about how
            <br />
            things fit together.
          </h2>
          <p className="muted">
            I’m Worapat Chuchoed, or Tang, a Computer Engineering graduate
            interested in backend development, APIs, databases, and web
            applications.
          </p>
          <p className="muted">
            I enjoy connecting the pieces of a system and turning real-world
            problems into practical software. I’m targeting junior software
            engineering, backend, and full-stack development roles.
          </p>
        </div>
        <div className="education-card">
          <p className="eyebrow">EDUCATION</p>
          <h3>Computer Engineering</h3>
          <p>King Mongkut’s University of Technology Thonburi (KMUTT)</p>
          <p className="muted">Bachelor of Engineering · 2022–2026</p>
          <div className="education-result">
            <strong>
              3.54 <small>/ 4.00</small>
            </strong>
            <span>GPAX · Second-Class Honors</span>
          </div>
          <hr />
          <p className="eyebrow">COMMUNICATION</p>
          <p>QQ English · Cebu, Philippines</p>
          <p className="muted">240 hours of English training · TOEIC 765</p>
        </div>
      </div>
    </section>
  );
}
