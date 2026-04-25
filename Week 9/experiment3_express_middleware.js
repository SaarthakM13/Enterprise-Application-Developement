const express = require("express");
const path = require("path");

const app = express();
const PORT = 3003;

app.use((req, res, next) => {
  const timestamp = new Date().toISOString();
  console.log(`[${timestamp}] ${req.method} ${req.originalUrl} - ${req.ip}`);
  next();
});

// Helper function to build beautiful pages
function buildPage(title, content) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title} - DevPortal</title>
  <style>
    *, *::before, *::after { box-sizing: border-box; }
    body { font-family: 'Inter', -apple-system, sans-serif; background: #0f172a; color: #f8fafc; margin: 0; padding: 0; display: flex; flex-direction: column; min-height: 100vh; }
    nav { background: rgba(30, 41, 59, 0.8); backdrop-filter: blur(10px); padding: 16px 40px; border-bottom: 1px solid #334155; display: flex; justify-content: space-between; align-items: center; }
    nav .brand { font-weight: 800; font-size: 22px; color: #38bdf8; letter-spacing: -0.5px; }
    nav .links a { color: #94a3b8; text-decoration: none; margin-left: 24px; font-weight: 500; font-size: 15px; transition: 0.2s; }
    nav .links a:hover { color: #f8fafc; }
    main { flex: 1; display: flex; justify-content: center; align-items: center; padding: 40px; }
    .card { background: #1e293b; border-radius: 16px; padding: 48px; box-shadow: 0 20px 25px -5px rgba(0,0,0,0.5); text-align: left; max-width: 550px; width: 100%; border: 1px solid #334155; }
    h1 { color: #f8fafc; font-size: 32px; margin-bottom: 12px; margin-top: 0; font-weight: 700; letter-spacing: -0.5px; }
    p { color: #cbd5e1; line-height: 1.7; margin-bottom: 24px; font-size: 16px; }
    .btn { background: #0ea5e9; color: white; border: none; padding: 12px 24px; border-radius: 8px; font-weight: 600; cursor: pointer; transition: 0.2s; text-decoration: none; display: inline-flex; align-items: center; justify-content: center; }
    .btn:hover { background: #0284c7; transform: translateY(-1px); }
    input { width: 100%; padding: 14px 16px; margin-bottom: 16px; border: 1px solid #475569; border-radius: 8px; box-sizing: border-box; background: #0f172a; color: white; font-size: 15px; transition: 0.2s; }
    input:focus { outline: none; border-color: #38bdf8; box-shadow: 0 0 0 3px rgba(56, 189, 248, 0.2); }
    .features { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 24px; }
    .feature-item { background: #0f172a; padding: 16px; border-radius: 8px; border: 1px solid #334155; }
    .feature-item strong { color: #38bdf8; display: block; margin-bottom: 4px; }
    .feature-item span { color: #94a3b8; font-size: 13px; }
  </style>
</head>
<body>
  <nav>
    <div class="brand">DevPortal</div>
    <div class="links">
      <a href="/home">Home</a>
      <a href="/login">Login</a>
      <a href="/static-page">Static</a>
    </div>
  </nav>
  <main>
    <div class="card">
      ${content}
    </div>
  </main>
</body>
</html>`;
}

app.get("/", (req, res) => {
  res.send(buildPage("Welcome", `
    <h1>Express.js Middleware</h1>
    <p>Welcome to the developer portal demonstrating robust request logging and secure routing architectures.</p>
    <div class="features">
      <div class="feature-item">
        <strong>Logging</strong>
        <span>Intercepts and logs every HTTP request with timestamps.</span>
      </div>
      <div class="feature-item">
        <strong>Routing</strong>
        <span>Cleanly separates endpoints for logical application flow.</span>
      </div>
    </div>
    <a href="/home" class="btn" style="width: 100%;">Enter Dashboard</a>
  `));
});

app.get("/home", (req, res) => {
  res.send(buildPage("Home", `
    <h1>System Dashboard</h1>
    <p>You have successfully routed to the protected <code>/home</code> endpoint. The middleware has intercepted your request and logged it to the server console.</p>
    <p style="background: #0f172a; padding: 16px; border-radius: 8px; font-family: monospace; font-size: 13px; color: #10b981; border: 1px solid #334155;">
      [SYSTEM_LOG] GET /home - 200 OK
    </p>
    <a href="/login" class="btn">Proceed to Authentication</a>
  `));
});

app.get("/login", (req, res) => {
  res.send(buildPage("Login", `
    <h1>Developer Login</h1>
    <p>Authenticate to access sensitive API configuration zones.</p>
    <form onsubmit="alert('Authentication successful!'); return false;">
      <input type="text" placeholder="Developer ID (e.g. admin)" required />
      <input type="password" placeholder="Access Token" required />
      <button type="submit" class="btn" style="width: 100%;">Authenticate Session</button>
    </form>
  `));
});

app.get("/static-page", (req, res) => {
  res.sendFile(path.join(__dirname, "experiment3_static.html"));
});

app.use((req, res) => {
  res.status(404).send(buildPage("404", "<h1>404 Not Found</h1><p>The page you're looking for doesn't exist.</p>"));
});

app.listen(PORT, () => {
  console.log(`Express server running at http://localhost:${PORT}`);
  console.log("Available routes: /home, /login, /static-page");
});
