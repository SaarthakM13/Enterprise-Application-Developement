const express = require("express");

const app = express();
const PORT = 3004;

app.use(express.json());

app.get("/", (req, res) => {
  res.send(`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Student Records - REST API</title>
  <style>
    body { font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif; background: #eef2f6; color: #334155; margin: 0; padding: 40px; }
    .container { max-width: 900px; margin: 0 auto; background: white; padding: 40px; border-radius: 16px; box-shadow: 0 10px 25px -5px rgba(0,0,0,0.05); border: 1px solid #e2e8f0; }
    h1 { color: #4338ca; margin-top: 0; font-size: 28px; letter-spacing: -0.5px; }
    p.desc { color: #64748b; font-size: 15px; margin-bottom: 32px; line-height: 1.6; }
    .form-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 32px; background: #f8fafc; padding: 24px; border-radius: 12px; border: 1px solid #f1f5f9; }
    input { width: 100%; padding: 12px 16px; border: 1px solid #cbd5e1; border-radius: 8px; box-sizing: border-box; font-size: 14px; transition: 0.2s; }
    input:focus { outline: none; border-color: #4f46e5; box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.15); }
    .btn { background: #4f46e5; color: white; border: none; padding: 12px 24px; border-radius: 8px; cursor: pointer; font-weight: 600; font-size: 14px; transition: 0.2s; box-shadow: 0 4px 6px -1px rgba(79, 70, 229, 0.2); }
    .btn:hover { background: #4338ca; transform: translateY(-1px); }
    table { width: 100%; border-collapse: separate; border-spacing: 0; margin-top: 10px; border-radius: 8px; overflow: hidden; border: 1px solid #e2e8f0; }
    th, td { padding: 16px; text-align: left; border-bottom: 1px solid #e2e8f0; font-size: 14px; }
    th { background: #f8fafc; color: #475569; font-weight: 600; text-transform: uppercase; font-size: 12px; letter-spacing: 0.5px; }
    tr:last-child td { border-bottom: none; }
    .action-btn { padding: 8px 14px; font-size: 13px; margin-right: 6px; border-radius: 6px; border: none; cursor: pointer; font-weight: 500; transition: 0.2s; }
    .btn-delete { background: #fee2e2; color: #ef4444; }
    .btn-delete:hover { background: #fca5a5; color: #991b1b; }
    .btn-edit { background: #e0e7ff; color: #4f46e5; }
    .btn-edit:hover { background: #c7d2fe; color: #3730a3; }
  </style>
</head>
<body>
  <div class="container">
    <h1>Student Records (In-Memory REST API)</h1>
    <p class="desc">This interface consumes the Express backend REST API. It performs full CRUD operations (Create, Read, Update, Delete) against an in-memory JSON array using standard HTTP methods via the browser's native Fetch API.</p>
    <form id="studentForm" class="form-grid">
      <input type="hidden" id="studentId">
      <input type="text" id="name" placeholder="Name" required>
      <input type="text" id="rollNumber" placeholder="Roll Number" required>
      <input type="text" id="department" placeholder="Department" required>
      <input type="number" id="marks" placeholder="Marks" required>
      <button type="submit" class="btn" style="grid-column: span 2;">Save Student</button>
    </form>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Roll No</th>
          <th>Dept</th>
          <th>Marks</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody id="studentTable"></tbody>
    </table>
  </div>

  <script>
    async function fetchStudents() {
      const res = await fetch('/students');
      const json = await res.json();
      const tbody = document.getElementById('studentTable');
      tbody.innerHTML = '';
      json.data.forEach(s => {
        tbody.innerHTML += \`
          <tr>
            <td>\${s.name}</td>
            <td>\${s.rollNumber}</td>
            <td>\${s.department}</td>
            <td>\${s.marks}</td>
            <td>
              <button class="action-btn btn-edit" onclick="editStudent('\${s.id}', '\${s.name}', '\${s.rollNumber}', '\${s.department}', \${s.marks})">Edit</button>
              <button class="action-btn btn-delete" onclick="deleteStudent('\${s.id}')">Delete</button>
            </td>
          </tr>
        \`;
      });
    }

    document.getElementById('studentForm').addEventListener('submit', async (e) => {
      e.preventDefault();
      const id = document.getElementById('studentId').value;
      const data = {
        name: document.getElementById('name').value,
        rollNumber: document.getElementById('rollNumber').value,
        department: document.getElementById('department').value,
        marks: Number(document.getElementById('marks').value)
      };

      const url = id ? \`/students/\${id}\` : '/students';
      const method = id ? 'PUT' : 'POST';

      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      
      if(res.ok) {
        document.getElementById('studentForm').reset();
        document.getElementById('studentId').value = '';
        fetchStudents();
      } else {
        const error = await res.json();
        alert(error.message);
      }
    });

    function editStudent(id, name, roll, dept, marks) {
      document.getElementById('studentId').value = id;
      document.getElementById('name').value = name;
      document.getElementById('rollNumber').value = roll;
      document.getElementById('department').value = dept;
      document.getElementById('marks').value = marks;
    }

    async function deleteStudent(id) {
      if(confirm('Delete student?')) {
        await fetch(\`/students/\${id}\`, { method: 'DELETE' });
        fetchStudents();
      }
    }

    fetchStudents();
  </script>
</body>
</html>`);
});

let students = [
  { id: 1, name: "Riya Sharma", rollNumber: "23CS101", department: "CSE", marks: 88 },
  { id: 2, name: "Arjun Nair", rollNumber: "23CS102", department: "IT", marks: 91 }
];

let nextId = 3;

function validateStudentPayload(payload, requireAllFields) {
  const fields = ["name", "rollNumber", "department", "marks"];

  if (requireAllFields) {
    for (const field of fields) {
      if (!(field in payload)) {
        return `Missing required field: ${field}`;
      }
    }
  }

  if ("marks" in payload && (typeof payload.marks !== "number" || Number.isNaN(payload.marks))) {
    return "Field 'marks' must be a valid number.";
  }

  return null;
}

app.get("/students", (req, res) => {
  res.json({
    success: true,
    count: students.length,
    data: students
  });
});

app.post("/students", (req, res) => {
  const validationError = validateStudentPayload(req.body, true);
  if (validationError) {
    res.status(400).json({ success: false, message: validationError });
    return;
  }

  const newStudent = {
    id: nextId++,
    name: req.body.name,
    rollNumber: req.body.rollNumber,
    department: req.body.department,
    marks: req.body.marks
  };

  students.push(newStudent);

  res.status(201).json({
    success: true,
    message: "Student added successfully.",
    data: newStudent
  });
});

app.put("/students/:id", (req, res) => {
  const studentId = Number(req.params.id);
  if (Number.isNaN(studentId)) {
    res.status(400).json({ success: false, message: "Invalid student id." });
    return;
  }

  const studentIndex = students.findIndex((student) => student.id === studentId);
  if (studentIndex === -1) {
    res.status(404).json({ success: false, message: "Student not found." });
    return;
  }

  const validationError = validateStudentPayload(req.body, false);
  if (validationError) {
    res.status(400).json({ success: false, message: validationError });
    return;
  }

  const updatedStudent = {
    ...students[studentIndex],
    ...req.body,
    id: studentId
  };

  students[studentIndex] = updatedStudent;

  res.json({
    success: true,
    message: "Student updated successfully.",
    data: updatedStudent
  });
});

app.delete("/students/:id", (req, res) => {
  const studentId = Number(req.params.id);
  if (Number.isNaN(studentId)) {
    res.status(400).json({ success: false, message: "Invalid student id." });
    return;
  }

  const studentIndex = students.findIndex((student) => student.id === studentId);
  if (studentIndex === -1) {
    res.status(404).json({ success: false, message: "Student not found." });
    return;
  }

  const removedStudent = students[studentIndex];
  students = students.filter((student) => student.id !== studentId);

  res.json({
    success: true,
    message: "Student removed successfully.",
    data: removedStudent
  });
});

app.listen(PORT, () => {
  console.log(`REST API server running at http://localhost:${PORT}`);
});
