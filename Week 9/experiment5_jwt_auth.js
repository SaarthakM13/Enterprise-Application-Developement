const express = require("express");
const jwt = require("jsonwebtoken");

const app = express();
const PORT = 3005;

app.use(express.json());

app.get("/", (req, res) => {
  res.send(`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>JWT Secure Authentication</title>
  <style>
    body { font-family: 'Courier New', Courier, monospace; background: #0a0a0a; color: #00ff00; display: flex; justify-content: center; align-items: center; height: 100vh; margin: 0; }
    .card { background: #111; padding: 40px; border-radius: 4px; border: 1px solid #333; box-shadow: 0 0 20px rgba(0,255,0,0.1); width: 100%; max-width: 450px; text-align: left; position: relative; overflow: hidden; }
    .card::before { content: ""; position: absolute; top: 0; left: 0; right: 0; height: 2px; background: linear-gradient(90deg, transparent, #00ff00, transparent); }
    h1 { color: #fff; margin-top: 0; font-size: 24px; letter-spacing: 1px; text-transform: uppercase; border-bottom: 1px solid #333; padding-bottom: 16px; margin-bottom: 24px; }
    p.desc { font-size: 13px; color: #888; line-height: 1.5; margin-bottom: 24px; }
    input { width: 100%; padding: 14px; margin-bottom: 16px; border: 1px solid #333; border-radius: 2px; box-sizing: border-box; background: #000; color: #00ff00; font-family: 'Courier New', Courier, monospace; font-size: 14px; transition: 0.3s; }
    input:focus { outline: none; border-color: #00ff00; box-shadow: 0 0 8px rgba(0,255,0,0.2); }
    input::placeholder { color: #444; }
    .btn { background: #004400; color: #00ff00; border: 1px solid #00ff00; padding: 14px; border-radius: 2px; font-weight: bold; cursor: pointer; width: 100%; font-family: 'Courier New', Courier, monospace; letter-spacing: 1px; transition: 0.3s; text-transform: uppercase; }
    .btn:hover { background: #00ff00; color: #000; }
    #dashboardView { display: none; }
    .secret-data { background: #000; border: 1px dashed #00ff00; padding: 20px; border-radius: 2px; margin-top: 20px; color: #00ff00; font-family: monospace; white-space: pre-wrap; word-break: break-all; text-align: left; font-size: 13px; }
  </style>
</head>
<body>
  <div class="card" id="loginView">
    <h1>System Login</h1>
    <p class="desc">Authenticate to receive an encrypted JSON Web Token (JWT). This token is stored in the browser and used to securely authorize access to the protected dashboard API.</p>
    <p style="color: #666; font-size: 12px; margin-bottom: 16px;">> Enter credentials: admin / admin123</p>
    <form id="loginForm">
      <input type="text" id="username" placeholder="Username" required>
      <input type="password" id="password" placeholder="Password" required>
      <button type="submit" class="btn">Login & Get JWT</button>
    </form>
    <p id="loginError" style="color: red; font-size: 14px; display: none; margin-top: 16px;"></p>
  </div>

  <div class="card" id="dashboardView">
    <h1>Protected Dashboard</h1>
    <p id="welcomeMsg" style="font-weight: 600;"></p>
    <div class="secret-data" id="secretData"></div>
    <button class="btn" onclick="logout()" style="margin-top: 24px;">Logout</button>
  </div>

  <script>
    const loginForm = document.getElementById('loginForm');
    const loginView = document.getElementById('loginView');
    const dashboardView = document.getElementById('dashboardView');
    const loginError = document.getElementById('loginError');

    async function checkAuth() {
      const token = localStorage.getItem('jwt_token');
      if (!token) {
        showLogin();
        return;
      }

      const res = await fetch('/api/dashboard', {
        headers: { 'Authorization': 'Bearer ' + token }
      });

      if (res.ok) {
        const data = await res.json();
        showDashboard(data);
      } else {
        localStorage.removeItem('jwt_token');
        showLogin();
      }
    }

    loginForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;

      const res = await fetch('/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
      });

      const data = await res.json();
      if (data.success) {
        localStorage.setItem('jwt_token', data.token);
        loginError.style.display = 'none';
        checkAuth();
      } else {
        loginError.textContent = data.message;
        loginError.style.display = 'block';
      }
    });

    function showLogin() {
      loginView.style.display = 'block';
      dashboardView.style.display = 'none';
      document.getElementById('password').value = '';
    }

    function showDashboard(data) {
      loginView.style.display = 'none';
      dashboardView.style.display = 'block';
      document.getElementById('welcomeMsg').textContent = data.message;
      document.getElementById('secretData').textContent = 'Server Payload:\\n' + JSON.stringify(data.user, null, 2);
    }

    function logout() {
      localStorage.removeItem('jwt_token');
      showLogin();
    }

    checkAuth();
  </script>
</body>
</html>`);
});

const JWT_SECRET = "replace_with_a_strong_secret_key";
const TOKEN_EXPIRY = "1h";

const users = [
  { id: 1, username: "admin", password: "admin123" },
  { id: 2, username: "student", password: "student123" }
];

app.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    res.status(400).json({ success: false, message: "Username and password are required." });
    return;
  }

  const user = users.find((u) => u.username === username && u.password === password);

  if (!user) {
    res.status(401).json({ success: false, message: "Invalid credentials." });
    return;
  }

  const token = jwt.sign(
    {
      id: user.id,
      username: user.username
    },
    JWT_SECRET,
    { expiresIn: TOKEN_EXPIRY }
  );

  res.json({
    success: true,
    message: "Login successful.",
    token
  });
});

function authenticateToken(req, res, next) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    res.status(401).json({ success: false, message: "Authorization header missing." });
    return;
  }

  const [scheme, token] = authHeader.split(" ");

  if (scheme !== "Bearer" || !token) {
    res.status(401).json({ success: false, message: "Token format must be: Bearer <token>." });
    return;
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(403).json({ success: false, message: "Invalid or expired token." });
  }
}

app.get("/api/dashboard", authenticateToken, (req, res) => {
  res.json({
    success: true,
    message: `Welcome to the dashboard, ${req.user.username}.`,
    user: req.user
  });
});

app.listen(PORT, () => {
  console.log(`JWT auth server running at http://localhost:${PORT}`);
});
