### Enterprise Application Developement Lab

### WEEK 1
## Experiment 1 - Basic HTML Page

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Section 1 - HTML Introduction</title>
</head>
<body>
  <h1>Welcome to HTML</h1>
  <p>This page uses the standard HTML document structure with a heading and paragraph.</p>
</body>
</html>
```
/pagebreak

## Experiment 2 - Basic Text Formatting

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Section 2 - Text and Formatting</title>
</head>
<body>
  <h1>Profile</h1>
  <h2>Name: <strong>Saarthak Manocha</strong></h2>
  <p><em>Branch:</em> Information Technology</p>
  <p>College: <strong><em>Chaitanya Bharathi Institute of Technology</em></strong></p>
</body>
</html>
```
/pagebreak

## Experiment 3 - Div and Span

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Section 3 - div and span</title>
  <style>
    .half {
      width: 48%;
      padding: 10px;
      border: 1px solid #ccc;
      box-sizing: border-box;
      display: inline-block;
      vertical-align: top;
    }
  </style>
</head>
<body>
  <div class="half">
    <h2>Left Section</h2>
    <p>This area holds content for the left side.</p>
  </div>
  <div class="half">
    <h2>Right Section</h2>
    <p>Highlight a <span style="color: blue;">single</span> word using span.</p>
  </div>
</body>
</html>
```
/pagebreak

## Experiment 4 - Lists

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Section 4 - Lists</title>
</head>
<body>
  <h1>Lists</h1>

  <h2>Skills (Unordered List)</h2>
  <ul>
    <li>HTML</li>
    <li>CSS</li>
    <li>JavaScript</li>
  </ul>

  <h2>Subjects Studied (Ordered List)</h2>
  <ol>
    <li>Mathematics</li>
    <li>Data Structures</li>
    <li>Design and Analysis of Algorithms</li>
  </ol>
</body>
</html>
```
/pagebreak

## Experiment 5 - Images and Links

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Section 5 - Images and Links</title>
</head>
<body>
  <h1>College Image and Contact</h1>
  <img src="../Assets/Images/CBIT.png" alt="CBIT college logo" width="150" height="150">
  <p>Email me at <a href="mailto:principal@cbit.ac.in">principal@cbit.ac.in</a>.</p>
</body>
</html>
```
/pagebreak

## Experiment 6 - Tables

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Section 6 - Tables</title>
  <style>
    table, th, td {
      border: 1px solid #333;
      border-collapse: collapse;
      padding: 8px;
    }
    th {
      background: #f0f0f0;
    }
  </style>
</head>
<body>
  <h1>Academic Details</h1>
  <table>
    <caption>Semester marks</caption>
    <thead>
      <tr>
        <th>Subject</th>
        <th>Marks</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Mathematics</td>
        <td>90</td>
      </tr>
      <tr>
        <td>Physics</td>
        <td>85</td>
      </tr>
      <tr>
        <td>Computer Science</td>
        <td>95</td>
      </tr>
    </tbody>
  </table>
</body>
</html>
```
/pagebreak

## Experiment 7 - Forms

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Section 7 - Basic Form</title>
</head>
<body>
  <h1>Registration Form</h1>
  <form action="#" method="post" autocomplete="on">
    <div>
      <label for="name">Name:</label>
      <input type="text" id="name" name="name" required>
    </div>
    <div>
      <label for="email">Email:</label>
      <input type="email" id="email" name="email" required>
    </div>
    <div>
      <label for="password">Password:</label>
      <input type="password" id="password" name="password" required>
    </div>
    <button type="submit">Submit</button>
  </form>
</body>
</html>
```
/pagebreak

### WEEK 2
## Experiment 1 - Student Registration Form

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Student Registration Form</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            max-width: 500px;
            margin: 50px auto;
            padding: 20px;
            background-color: #f5f5f5;
        }
        h1 {
            text-align: center;
            color: #333;
        }
        form {
            background-color: white;
            padding: 30px;
            border-radius: 10px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }
        label {
            display: block;
            margin-top: 15px;
            font-weight: bold;
            color: #555;
        }
        input[type="text"],
        input[type="email"],
        input[type="tel"],
        select {
            width: 100%;
            padding: 10px;
            margin-top: 5px;
            border: 1px solid #ddd;
            border-radius: 5px;
            box-sizing: border-box;
        }
        .radio-group {
            margin-top: 5px;
        }
        .radio-group label {
            display: inline;
            font-weight: normal;
            margin-right: 20px;
        }
        button {
            width: 100%;
            padding: 12px;
            margin-top: 25px;
            background-color: #4CAF50;
            color: white;
            border: none;
            border-radius: 5px;
            font-size: 16px;
            cursor: pointer;
        }
        button:hover {
            background-color: #45a049;
        }
    </style>
</head>
<body>
    <h1>Student Registration Form</h1>
    <form action="#" method="post">
        <label for="name">Student Name:</label>
        <input type="text" id="name" name="name" placeholder="Enter your full name" required>

        <label for="roll">Roll Number:</label>
        <input type="text" id="roll" name="roll" placeholder="Enter your roll number" required>

        <label for="email">Email:</label>
        <input type="email" id="email" name="email" placeholder="Enter your email" required>

        <label for="phone">Phone Number:</label>
        <input type="tel" id="phone" name="phone" placeholder="Enter your phone number" required>

        <label>Gender:</label>
        <div class="radio-group">
            <input type="radio" id="male" name="gender" value="male" required>
            <label for="male">Male</label>
            <input type="radio" id="female" name="gender" value="female">
            <label for="female">Female</label>
            <input type="radio" id="other" name="gender" value="other">
            <label for="other">Other</label>
        </div>

        <label for="branch">Branch:</label>
        <select id="branch" name="branch" required>
            <option value="">-- Select Branch --</option>
            <option value="cse">Computer Science Engineering</option>
            <option value="ece">Electronics & Communication</option>
            <option value="eee">Electrical & Electronics</option>
            <option value="mech">Mechanical Engineering</option>
            <option value="civil">Civil Engineering</option>
            <option value="it">Information Technology</option>
        </select>

        <button type="submit">Submit</button>
    </form>
</body>
</html>
```
/pagebreak

## Experiment 2 - Timetable 

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Class Timetable - IT-2 Semester IV</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            max-width: 1200px;
            margin: 30px auto;
            padding: 20px;
            background-color: #f0f4f8;
        }
        h1 {
            text-align: center;
            color: #2c3e50;
            margin-bottom: 5px;
        }
        .subtitle {
            text-align: center;
            color: #666;
            margin-bottom: 25px;
        }
        table {
            width: 100%;
            border-collapse: collapse;
            background-color: white;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }
        th, td {
            padding: 12px 8px;
            text-align: center;
            border: 1px solid #333;
        }
        th {
            background-color: #2c3e50;
            color: white;
            font-weight: bold;
        }
        .day-header {
            background-color: #34495e;
            color: white;
            font-weight: bold;
        }
        .time-header {
            background-color: #3498db;
            color: white;
            font-size: 0.85em;
        }
        .lunch {
            background-color: #f39c12;
            color: white;
            font-weight: bold;
        }
        .lab {
            background-color: #e8f5e9;
            color: #2e7d32;
            font-weight: bold;
        }
        .library {
            background-color: #fff3e0;
            color: #e65100;
        }
        .sports {
            background-color: #e3f2fd;
            color: #1565c0;
        }
        .mentoring {
            background-color: #fce4ec;
            color: #c2185b;
        }
        tr:hover td:not(.lunch):not(.time-header):not(.day-header) {
            background-color: #f5f5f5;
        }
    </style>
</head>
<body>
    <h1>Class Timetable</h1>
    <p class="subtitle">Class: BE - IV Semester IT-2 | Batch: B3 | Room: L-301 | W.E.F: 19/01/2026</p>
    
    <table>
        <tr>
            <th>Day/Time</th>
            <th class="time-header">I<br>9:10-10:10</th>
            <th class="time-header">II<br>10:10-11:10</th>
            <th class="time-header">III<br>11:15-12:15</th>
            <th class="lunch">LUNCH<br>12:15-1:00</th>
            <th class="time-header">IV<br>1:00-2:00</th>
            <th class="time-header">V<br>2:00-3:00</th>
            <th class="time-header">VI<br>3:05-4:05</th>
        </tr>
        <tr>
            <td class="day-header">MONDAY</td>
            <td>PE-I</td>
            <td>EEA</td>
            <td>PQT</td>
            <td class="lunch" rowspan="5">L<br>U<br>N<br>C<br>H<br><br>B<br>R<br>E<br>A<br>K</td>
            <td>DBMS</td>
            <td class="library">LIBRARY</td>
            <td class="sports">SPORTS</td>
        </tr>
        <tr>
            <td class="day-header">TUESDAY</td>
            <td colspan="2" class="lab">MP-I (Mini Project)</td>
            <td class="library">LIBRARY</td>
            <td>PQT</td>
            <td>EEA</td>
            <td>ES</td>
        </tr>
        <tr>
            <td class="day-header">WEDNESDAY</td>
            <td>EAD</td>
            <td>PE-I</td>
            <td>PQT</td>
            <td colspan="3" class="lab">EAD LAB (B3)</td>
        </tr>
        <tr>
            <td class="day-header">THURSDAY</td>
            <td>DBMS</td>
            <td>EEA</td>
            <td>EAD</td>
            <td>PE-I</td>
            <td>ES</td>
            <td>PQT (T)</td>
        </tr>
        <tr>
            <td class="day-header">FRIDAY</td>
            <td colspan="3" class="lab">DBMS LAB (B3)</td>
            <td>DBMS</td>
            <td>EAD</td>
            <td class="mentoring">MENTORING</td>
        </tr>
    </table>

    <br><br>
    
    <h2 style="text-align: center; color: #2c3e50;">Subject Details</h2>
    <table>
        <tr>
            <th>Sub-Code</th>
            <th>Course Name</th>
            <th>Faculty</th>
        </tr>
        <tr>
            <td>22MTC15</td>
            <td>Probability and Queueing Theory (PQT)</td>
            <td>Dr. V. Omeshwar Reddy</td>
        </tr>
        <tr>
            <td>22CSC11N</td>
            <td>Database Management Systems (DBMS)</td>
            <td>Dr. Kolikipogu Ramakrishna</td>
        </tr>
        <tr>
            <td>22ITC08N</td>
            <td>Enterprise Application Development (EAD)</td>
            <td>Mr. N. Shiva Kumar</td>
        </tr>
        <tr>
            <td>23MBC01</td>
            <td>Engineering Economics & Accountancy (EEA)</td>
            <td>Prof. T Venkat</td>
        </tr>
        <tr>
            <td>22CEM01</td>
            <td>Environmental Science (ES)</td>
            <td>Dr. Kiran Y. V.</td>
        </tr>
        <tr>
            <td>22ITE01</td>
            <td>Data Mining (PE-I)</td>
            <td>Dr. Suresh Pabboju</td>
        </tr>
        <tr>
            <td>22CSC13N</td>
            <td>Database Management Systems Lab</td>
            <td>Dr. Kolikipogu Ramakrishna</td>
        </tr>
        <tr>
            <td>22ITC09N</td>
            <td>Enterprise Application Development Lab</td>
            <td>Mr. N. Shiva Kumar</td>
        </tr>
        <tr>
            <td>22ITC07</td>
            <td>Mini Project - I (MP-I)</td>
            <td>Dr. R M Krishna Sureddi (B3)</td>
        </tr>
    </table>
</body>
</html>
```
/pagebreak

## Experiment 3 - Feedback Form

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Feedback Form</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            max-width: 500px;
            margin: 50px auto;
            padding: 20px;
            background-color: #e8f5e9;
        }

        h1 {
            text-align: center;
            color: #2e7d32;
        }

        form {
            background-color: white;
            padding: 30px;
            border-radius: 10px;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }

        label {
            display: block;
            margin-top: 15px;
            font-weight: bold;
            color: #555;
        }

        input[type="text"],
        input[type="email"],
        textarea {
            width: 100%;
            padding: 10px;
            margin-top: 5px;
            border: 1px solid #ddd;
            border-radius: 5px;
            box-sizing: border-box;
        }

        textarea {
            height: 120px;
            resize: vertical;
        }

        .radio-group {
            margin-top: 10px;
        }

        .radio-group label {
            display: inline;
            font-weight: normal;
            margin-right: 15px;
            cursor: pointer;
        }

        .satisfaction-title {
            margin-top: 20px;
        }

        button {
            width: 100%;
            padding: 12px;
            margin-top: 25px;
            background-color: #2e7d32;
            color: white;
            border: none;
            border-radius: 5px;
            font-size: 16px;
            cursor: pointer;
        }

        button:hover {
            background-color: #1b5e20;
        }
    </style>
</head>

<body>
    <h1>📝 Feedback Form</h1>
    <form action="#" method="post">
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" placeholder="Enter your name" required>

        <label for="email">Email:</label>
        <input type="email" id="email" name="email" placeholder="Enter your email" required>

        <label for="feedback">Feedback Message:</label>
        <textarea id="feedback" name="feedback" placeholder="Write your feedback here..." required></textarea>

        <label class="satisfaction-title">How satisfied are you?</label>
        <div class="radio-group">
            <input type="radio" id="satisfied" name="satisfaction" value="satisfied" required>
            <label for="satisfied">😊 Satisfied</label>

            <input type="radio" id="neutral" name="satisfaction" value="neutral">
            <label for="neutral">😐 Neutral</label>

            <input type="radio" id="unsatisfied" name="satisfaction" value="unsatisfied">
            <label for="unsatisfied">😞 Unsatisfied</label>
        </div>

        <button type="submit">Submit Feedback</button>
    </form>
</body>
```
/pagebreak

## Experiment 4 - MERN Stack Info Page

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Introduction to MERN Stack</title>
    <style>
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
        }

        .container {
            background-color: white;
            padding: 40px;
            border-radius: 15px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        }

        h1 {
            text-align: center;
            color: #333;
            font-size: 2.5em;
            margin-bottom: 10px;
        }

        .subtitle {
            text-align: center;
            color: #666;
            margin-bottom: 30px;
        }

        p {
            color: #555;
            line-height: 1.8;
            font-size: 1.1em;
        }

        h2 {
            color: #764ba2;
            margin-top: 30px;
        }

        ol {
            color: #555;
            line-height: 2;
            font-size: 1.1em;
        }

        ol li {
            margin-bottom: 10px;
            padding-left: 10px;
        }

        .tech-name {
            font-weight: bold;
            color: #667eea;
        }

        .image-container {
            text-align: center;
            margin: 30px 0;
        }

        .image-container img {
            max-width: 100%;
            height: auto;
            border-radius: 10px;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
        }

        .link-section {
            text-align: center;
            margin-top: 30px;
            padding: 20px;
            background-color: #f8f9fa;
            border-radius: 10px;
        }

        .link-section a {
            display: inline-block;
            padding: 12px 30px;
            background-color: #00684A;
            color: white;
            text-decoration: none;
            border-radius: 25px;
            font-weight: bold;
            transition: background-color 0.3s;
        }

        .link-section a:hover {
            background-color: #004D40;
        }
    </style>
</head>

<body>
    <div class="container">
        <h1>Introduction to MERN Stack</h1>
        <p class="subtitle">Building Modern Full-Stack Web Applications</p>

        <p>
            The <strong>MERN Stack</strong> is a popular JavaScript-based technology stack used for building
            modern, full-stack web applications. MERN is an acronym that stands for MongoDB, Express.js,
            React, and Node.js. This stack allows developers to use JavaScript for both frontend and
            backend development, making it easier to build seamless, end-to-end applications with a
            single programming language.
        </p>

        <h2>Technologies in MERN Stack</h2>
        <ol>
            <li>
                <span class="tech-name">MongoDB</span> - A NoSQL document database that stores data in
                flexible, JSON-like documents. It's highly scalable and perfect for modern applications.
            </li>
            <li>
                <span class="tech-name">Express.js</span> - A minimal and flexible Node.js web application
                framework that provides robust features for building web and mobile applications.
            </li>
            <li>
                <span class="tech-name">React</span> - A JavaScript library for building user interfaces,
                particularly single-page applications. It allows developers to create reusable UI components.
            </li>
            <li>
                <span class="tech-name">Node.js</span> - A JavaScript runtime built on Chrome's V8 JavaScript
                engine. It allows running JavaScript on the server-side.
            </li>
        </ol>

        <div class="image-container">
            <img src="https://miro.medium.com/v2/resize:fit:678/0*kxPYwfJmkXZ3iCWy.png"
                alt="MERN Stack Architecture Diagram"
                onerror="this.src='https://via.placeholder.com/600x300?text=MERN+Stack'">
            <p><em>MERN Stack Architecture</em></p>
        </div>

        <div class="link-section">
            <p>Learn more about MongoDB:</p>
            <a href="https://www.mongodb.com" target="_blank">Visit MongoDB Official Website →</a>
        </div>
    </div>
</body>

</html>
```
/pagebreak

## Experiment 5 - Use of Fieldset and Legend

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>User Information Form</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            max-width: 550px;
            margin: 50px auto;
            padding: 20px;
            background-color: #fff3e0;
        }

        h1 {
            text-align: center;
            color: #e65100;
        }

        form {
            background-color: white;
            padding: 30px;
            border-radius: 10px;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }

        fieldset {
            border: 2px solid #ff9800;
            border-radius: 10px;
            padding: 20px;
            margin-bottom: 20px;
        }

        legend {
            font-size: 1.2em;
            font-weight: bold;
            color: #e65100;
            padding: 0 10px;
        }

        label {
            display: block;
            margin-top: 15px;
            font-weight: bold;
            color: #555;
        }

        input[type="text"],
        input[type="email"],
        input[type="tel"],
        input[type="date"],
        select {
            width: 100%;
            padding: 10px;
            margin-top: 5px;
            border: 1px solid #ddd;
            border-radius: 5px;
            box-sizing: border-box;
        }

        .radio-group {
            margin-top: 5px;
        }

        .radio-group label {
            display: inline;
            font-weight: normal;
            margin-right: 20px;
        }

        button {
            width: 100%;
            padding: 12px;
            margin-top: 25px;
            background-color: #ff9800;
            color: white;
            border: none;
            border-radius: 5px;
            font-size: 16px;
            cursor: pointer;
        }

        button:hover {
            background-color: #f57c00;
        }
    </style>
</head>

<body>
    <h1>📋 Registration Form</h1>
    <form action="#" method="post">
        <!-- Personal Information Fieldset -->
        <fieldset>
            <legend>👤 User Information</legend>

            <label for="fullname">Full Name:</label>
            <input type="text" id="fullname" name="fullname" placeholder="Enter your full name" required>

            <label for="dob">Date of Birth:</label>
            <input type="date" id="dob" name="dob" required>

            <label>Gender:</label>
            <div class="radio-group">
                <input type="radio" id="male" name="gender" value="male" required>
                <label for="male">Male</label>
                <input type="radio" id="female" name="gender" value="female">
                <label for="female">Female</label>
                <input type="radio" id="other" name="gender" value="other">
                <label for="other">Other</label>
            </div>
        </fieldset>

        <!-- Contact Information Fieldset -->
        <fieldset>
            <legend>📞 Contact Information</legend>

            <label for="email">Email Address:</label>
            <input type="email" id="email" name="email" placeholder="Enter your email" required>

            <label for="phone">Phone Number:</label>
            <input type="tel" id="phone" name="phone" placeholder="Enter your phone number" required>

            <label for="address">Address:</label>
            <input type="text" id="address" name="address" placeholder="Enter your address">
        </fieldset>

        <!-- Account Information Fieldset -->
        <fieldset>
            <legend>🔐 Account Preferences</legend>

            <label for="username">Username:</label>
            <input type="text" id="username" name="username" placeholder="Choose a username" required>

            <label for="notification">Notification Preference:</label>
            <select id="notification" name="notification">
                <option value="email">Email Notifications</option>
                <option value="sms">SMS Notifications</option>
                <option value="both">Both Email & SMS</option>
                <option value="none">No Notifications</option>
            </select>
        </fieldset>

        <button type="submit">Submit Information</button>
    </form>
</body>

</html>
```
/pagebreak

## Experiment 6 - Static Resume

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Resume</title>
    <style>
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
            background-color: #f5f5f5;
        }

        .resume {
            background-color: white;
            padding: 40px;
            border-radius: 10px;
            box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
        }

        .header {
            text-align: center;
            border-bottom: 3px solid #2196F3;
            padding-bottom: 20px;
            margin-bottom: 30px;
        }

        h1 {
            color: #1976D2;
            font-size: 2.5em;
            margin-bottom: 10px;
        }

        .contact-info {
            color: #666;
            font-size: 1em;
        }

        .contact-info span {
            margin: 0 10px;
        }

        .section {
            margin-bottom: 30px;
        }

        h2 {
            color: #1976D2;
            border-bottom: 2px solid #e0e0e0;
            padding-bottom: 10px;
            font-size: 1.5em;
        }

        .about-me {
            color: #555;
            line-height: 1.8;
            font-size: 1.05em;
        }

        table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 15px;
        }

        th,
        td {
            padding: 12px;
            text-align: left;
            border: 1px solid #ddd;
        }

        th {
            background-color: #2196F3;
            color: white;
        }

        tr:nth-child(even) {
            background-color: #f9f9f9;
        }

        .skills-list {
            color: #555;
            line-height: 2;
            font-size: 1.05em;
        }

        .skills-list li {
            padding: 5px 0;
        }

        .skill-badge {
            display: inline-block;
            background-color: #e3f2fd;
            color: #1976D2;
            padding: 3px 10px;
            border-radius: 15px;
            font-size: 0.9em;
            margin-left: 10px;
        }
    </style>
</head>

<body>
    <div class="resume">
        <!-- Header Section -->
        <div class="header">
            <h1>Saarthak Manocha    </h1>
            <div class="contact-info">
                <span>📧 saXXXXXXXXXX@email.com</span>
                <span>📱 +91 XXXXXXXXXX</span>
                <span>📍 Hyderabad, India</span>
            </div>
        </div>

        <!-- About Me Section -->
        <div class="section">
            <h2>👤 About Me</h2>
            <p class="about-me">
                I am a passionate and dedicated IT student currently in my 4th semester,
                pursuing a Bachelor's degree in Engineering. I have a keen interest in web development,
                particularly in building full-stack applications using modern technologies. I enjoy
                learning new programming languages and frameworks, and I'm always eager to take on
                challenging projects that help me grow as a developer.
            </p>
        </div>

        <!-- Education Section -->
        <div class="section">
            <h2>🎓 Education</h2>
            <table>
                <tr>
                    <th>Qualification</th>
                    <th>Institution</th>
                    <th>Year</th>
                    <th>Score</th>
                </tr>
                <tr>
                    <td>B.E. in IT</td>
                    <td>Chaitanya Bharathi Institute of Technology</td>
                    <td>2024 - Present</td>
                    <td>9.9 CGPA</td>
                </tr>
                <tr>
                    <td>Higher Secondary (12th)</td>
                    <td>Maharishi Vidya Mandir</td>
                    <td>2022 - 2024</td>
                    <td>90%</td>
                </tr>
                <tr>
                    <td>Secondary School (10th)</td>
                    <td>Maharishi Vidya Mandir</td>
                    <td>2020 - 2022</td>
                    <td>97%</td>
                </tr>
            </table>
        </div>

        <!-- Skills Section -->
        <div class="section">
            <h2>💻 Skills</h2>
            <ul class="skills-list">
                <li>HTML5 & CSS3 <span class="skill-badge">Web Development</span></li>
                <li>JavaScript & React.js <span class="skill-badge">Frontend</span></li>
                <li>Node.js & Express.js <span class="skill-badge">Backend</span></li>
                <li>MongoDB & MySQL <span class="skill-badge">Database</span></li>
                <li>Python Programming <span class="skill-badge">Programming</span></li>
                <li>Git & GitHub <span class="skill-badge">Version Control</span></li>
                <li>Problem Solving & Data Structures <span class="skill-badge">Core CS</span></li>
            </ul>
        </div>
    </div>
</body>

</html>
```
/pagebreak

