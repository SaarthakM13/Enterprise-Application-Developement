// Experiment 1: Node.js HTTP Server
// Uses the built-in http module to serve full HTML pages

const http = require("http");
const fs = require("fs");
const path = require("path");

// ========== Shared page template ==========
function buildPage(title, navActive, bodyContent, pageClass = "") {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${title} - CBIT</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      background: #f4f6f9;
      color: #1f2937;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
    }

    /* Navbar */
    nav {
      background: linear-gradient(135deg, #8B1538, #6B1028);
      padding: 0 32px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 56px;
      box-shadow: 0 2px 12px rgba(139,21,56,0.3);
    }
    nav .brand {
      color: white;
      font-weight: 800;
      font-size: 18px;
      text-decoration: none;
    }
    nav .brand small {
      display: block;
      font-size: 10px;
      font-weight: 400;
      color: #D4AF37;
    }
    nav .links { display: flex; gap: 4px; }
    nav .links a {
      color: rgba(255,255,255,0.75);
      text-decoration: none;
      font-size: 14px;
      font-weight: 600;
      padding: 8px 16px;
      border-radius: 6px;
      transition: all 0.2s;
    }
    nav .links a:hover { color: #D4AF37; }
    nav .links a.active {
      color: #D4AF37;
      background: rgba(212,175,55,0.12);
    }

    /* Main content */
    main {
      flex: 1;
      max-width: 800px;
      margin: 0 auto;
      padding: 40px 24px;
      width: 100%;
    }
    h1 { font-size: 28px; font-weight: 700; color: #1a1a2e; margin-bottom: 16px; }
    h2 { font-size: 20px; font-weight: 700; color: #8B1538; margin-bottom: 12px; }
    p { color: #495057; line-height: 1.7; font-size: 15px; margin-bottom: 14px; }
    .card {
      background: white;
      border-radius: 12px;
      padding: 24px;
      box-shadow: 0 4px 16px rgba(0,0,0,0.06);
      border: 1px solid #e9ecef;
      margin-bottom: 20px;
    }
    .stats {
      display: flex;
      gap: 16px;
      flex-wrap: wrap;
      margin: 24px 0;
    }
    .stat-box {
      background: linear-gradient(135deg, #8B1538, #6B1028);
      color: white;
      border-radius: 10px;
      padding: 20px 24px;
      text-align: center;
      flex: 1;
      min-width: 140px;
    }
    .stat-box .num { font-size: 28px; font-weight: 800; color: #D4AF37; }
    .stat-box .label { font-size: 12px; opacity: 0.9; margin-top: 4px; }
    .info-row {
      display: flex;
      justify-content: space-between;
      padding: 10px 0;
      border-bottom: 1px solid #f0f0f0;
      font-size: 14px;
    }
    .info-row:last-child { border-bottom: none; }
    .info-label { font-weight: 600; color: #6c757d; }
    .info-value { color: #1a1a2e; }
    .dept-list { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 12px; }
    .dept-tag {
      padding: 6px 14px;
      border-radius: 6px;
      font-size: 13px;
      font-weight: 500;
      background: #fdf2f4;
      color: #8B1538;
      border: 1px solid rgba(139,21,56,0.15);
    }

    /* Hero Full Viewport Layout */
    body.home-page {
      height: 100vh;
      overflow: hidden;
    }
    body.home-page main {
      max-width: 100%;
      padding: 0;
      display: flex;
      flex: 1;
    }
    .hero {
      display: flex;
      width: 100%;
      height: 100%;
      align-items: stretch;
    }
    .hero-img-container {
      flex: 1;
      height: 100%;
      display: flex;
    }
    .hero-img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      mask-image: linear-gradient(to right, black 80%, transparent 100%);
      -webkit-mask-image: linear-gradient(to right, black 80%, transparent 100%);
      filter: saturate(0.9);
      border-radius: 0;
    }
    .hero-content {
      flex: 1;
      padding: 40px 60px;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      height: 100%;
      overflow: hidden;
    }
    .hero-text h1 { font-size: 38px; margin-bottom: 12px; color: #8B1538; }
    .hero-text p { font-size: 16px; line-height: 1.6; color: #333; }
    .hero-content .stats { gap: 16px; margin: 0; }
    .hero-content .stat-box { padding: 16px; min-width: 120px; }
    .hero-content .stat-box .num { font-size: 28px; }
    .hero-content .stat-box .label { font-size: 13px; }
    .hero-content .card { padding: 24px; margin: 0; border-radius: 12px; box-shadow: 0 8px 24px rgba(0,0,0,0.06); }
    .hero-content .card h2 { font-size: 20px; margin-bottom: 12px; color: #1a1a2e; }
    .hero-content .card p { font-size: 15px; margin-bottom: 0; }

    /* Footer */
    footer {
      background: linear-gradient(135deg, #1a1a2e, #16213e);
      color: #94a3b8;
      padding: 20px 32px;
      text-align: center;
      font-size: 12px;
    }
  </style>
</head>
<body class="${pageClass}">
  <nav>
    <a href="/" class="brand">CBIT<small>Chaitanya Bharathi Institute of Technology</small></a>
    <div class="links">
      <a href="/" class="${navActive === "home" ? "active" : ""}">Home</a>
      <a href="/about" class="${navActive === "about" ? "active" : ""}">About</a>
      <a href="/contact" class="${navActive === "contact" ? "active" : ""}">Contact</a>
    </div>
  </nav>
  <main>
    ${bodyContent}
  </main>
  <footer>&copy; 2026 CBIT - Built with Node.js http module | Experiment 1</footer>
</body>
</html>`;
}

// ========== Page content ==========

const homePage = buildPage("Home", "home", `
  <div class="hero">
    <div class="hero-img-container">
      <img src="/campus-image" alt="CBIT Campus" class="hero-img" />
    </div>
    <div class="hero-content">
      <div class="hero-text">
        <h1>Welcome to CBIT</h1>
        <p>Chaitanya Bharathi Institute of Technology (CBIT) is an autonomous institution established in 1979, affiliated to Osmania University and approved by AICTE. Located at Gandipet, Hyderabad, CBIT has been a center of excellence in technical education for over 45 years.</p>
      </div>

      <div class="stats">
        <div class="stat-box">
          <div class="num">45+</div>
          <div class="label">Years of Excellence</div>
        </div>
        <div class="stat-box">
          <div class="num">5000+</div>
          <div class="label">Students</div>
        </div>
        <div class="stat-box">
          <div class="num">300+</div>
          <div class="label">Faculty</div>
        </div>
        <div class="stat-box">
          <div class="num">95%</div>
          <div class="label">Placements</div>
        </div>
      </div>

      <div class="card">
        <h2>Key Programs</h2>
        <p>CBIT offers undergraduate and postgraduate programs across 13 departments. Flagship programs include CSE (Intake: 360), ECE (Intake: 180), IT (Intake: 180), and Mechanical Engineering.</p>
      </div>

      <div class="card">
        <h2>Placement Highlights</h2>
        <p>95% placement rate with top recruiters including TCS, Infosys, Wipro, Amazon, Microsoft, and Google. Highest package: 44 LPA | Average package: 8.5 LPA.</p>
      </div>
    </div>
  </div>
`, "home-page");

const aboutPage = buildPage("About", "about", `
  <h1>About CBIT</h1>

  <div class="card">
    <h2>Our History</h2>
    <p>CBIT was established in 1979 by the Chaitanya Bharathi Educational Society. Over the decades, it has grown into one of Telangana's premier engineering institutions, accredited with NAAC A+ grade and multiple NBA accreditations.</p>
    <p>The institution is spread across a modern 40+ acre campus equipped with state-of-the-art labs, smart classrooms, and research facilities that provide students with a world-class learning environment.</p>
  </div>

  <div class="card">
    <h2>Departments</h2>
    <p>13 UG and PG departments offering B.E., B.Tech, M.Tech and MBA programs:</p>
    <div class="dept-list">
      <span class="dept-tag">Computer Science & Engineering</span>
      <span class="dept-tag">Information Technology</span>
      <span class="dept-tag">Electronics & Communication</span>
      <span class="dept-tag">Electrical & Electronics</span>
      <span class="dept-tag">Mechanical Engineering</span>
      <span class="dept-tag">Civil Engineering</span>
      <span class="dept-tag">AI & Data Science</span>
      <span class="dept-tag">Biotechnology</span>
    </div>
  </div>

  <div class="card">
    <h2>Campus Facilities</h2>
    <p>Our campus provides everything students need for academic and personal growth:</p>
    <div class="info-row"><span class="info-label">Computer Labs</span><span class="info-value">20+ Modern Labs</span></div>
    <div class="info-row"><span class="info-label">Library</span><span class="info-value">Central Library (1,00,000+ Books)</span></div>
    <div class="info-row"><span class="info-label">Sports</span><span class="info-value">Ground, Indoor Stadium & Gym</span></div>
    <div class="info-row"><span class="info-label">Hostel</span><span class="info-value">Boys & Girls Hostel</span></div>
    <div class="info-row"><span class="info-label">Dining</span><span class="info-value">Cafeteria, Food Court & Canteen</span></div>
    <div class="info-row"><span class="info-label">Connectivity</span><span class="info-value">Campus-wide Wi-Fi</span></div>
    <div class="info-row"><span class="info-label">Health</span><span class="info-value">Medical Center on Campus</span></div>
  </div>
`);

const contactPage = buildPage("Contact", "contact", `
  <h1>Contact Us</h1>

  <div class="card">
    <h2>College Address</h2>
    <div class="info-row"><span class="info-label">Institution</span><span class="info-value">Chaitanya Bharathi Institute of Technology</span></div>
    <div class="info-row"><span class="info-label">Address</span><span class="info-value">Gandipet, Hyderabad - 500075, Telangana</span></div>
    <div class="info-row"><span class="info-label">Phone</span><span class="info-value">+91 40 2419 3276</span></div>
    <div class="info-row"><span class="info-label">Email</span><span class="info-value">principal@cbit.ac.in</span></div>
    <div class="info-row"><span class="info-label">Website</span><span class="info-value">www.cbit.ac.in</span></div>
  </div>

  <div class="card">
    <h2>Student Details</h2>
    <div class="info-row"><span class="info-label">Name</span><span class="info-value">Saarthak Manocha</span></div>
    <div class="info-row"><span class="info-label">Roll Number</span><span class="info-value">1601-24-737-129</span></div>
    <div class="info-row"><span class="info-label">Department</span><span class="info-value">Information Technology</span></div>
    <div class="info-row"><span class="info-label">Semester</span><span class="info-value">IV (2026)</span></div>
    <div class="info-row"><span class="info-label">Subject</span><span class="info-value">Enterprise Application Development</span></div>
    <div class="info-row"><span class="info-label">Faculty</span><span class="info-value">Mr. N. Shiva Kumar</span></div>
  </div>

  <div class="card">
    <h2>Quick Links</h2>
    <div class="info-row"><span class="info-label">Admissions</span><span class="info-value">admissions.cbit.ac.in</span></div>
    <div class="info-row"><span class="info-label">Placements</span><span class="info-value">placements.cbit.ac.in</span></div>
    <div class="info-row"><span class="info-label">Research</span><span class="info-value">research.cbit.ac.in</span></div>
  </div>
`);

const notFoundPage = buildPage("404", "", `
  <h1>404 - Page Not Found</h1>
  <div class="card">
    <p>The requested page does not exist. Use the navigation above to go to a valid page.</p>
    <p><a href="/" style="color:#8B1538; font-weight:600;">Go to Home Page</a></p>
  </div>
`);

// ========== Server ==========

const server = http.createServer((req, res) => {
  if (req.method !== "GET") {
    res.writeHead(405, { "Content-Type": "text/html; charset=utf-8" });
    res.end(buildPage("405", "", "<h1>405 - Method Not Allowed</h1><div class='card'><p>Only GET requests are supported.</p></div>"));
    return;
  }

  if (req.url === "/campus-image") {
    const imgPath = path.join(__dirname, "..", "Assets", "Images", "CBIT front.jpeg");
    fs.readFile(imgPath, (err, data) => {
      if (err) {
        res.writeHead(404);
        res.end("Image not found");
        return;
      }
      res.writeHead(200, { "Content-Type": "image/jpeg" });
      res.end(data);
    });
    return;
  }

  switch (req.url) {
    case "/":
      res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
      res.end(homePage);
      break;
    case "/about":
      res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
      res.end(aboutPage);
      break;
    case "/contact":
      res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
      res.end(contactPage);
      break;
    default:
      res.writeHead(404, { "Content-Type": "text/html; charset=utf-8" });
      res.end(notFoundPage);
  }
});

const PORT = 3001;
server.listen(PORT, () => {
  console.log(`HTTP server running at http://localhost:${PORT}`);
  console.log("Routes: / (Home), /about (About), /contact (Contact)");
});
