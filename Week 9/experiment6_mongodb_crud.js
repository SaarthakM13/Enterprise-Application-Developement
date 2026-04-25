const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = 3006;

const MONGO_URI = "mongodb://127.0.0.1:27017/studentDB";

app.use(express.json());

const studentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },
    rollNumber: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },
    department: {
      type: String,
      required: true,
      trim: true
    },
    marks: {
      type: Number,
      required: true,
      min: 0,
      max: 100
    }
  },
  {
    timestamps: true,
    collection: "students"
  }
);

const Student = mongoose.model("Student", studentSchema);

function handleDatabaseError(error, res) {
  if (error.name === "ValidationError") {
    res.status(400).json({
      success: false,
      message: error.message
    });
    return;
  }

  if (error.code === 11000) {
    res.status(409).json({
      success: false,
      message: "Roll number already exists. Use a unique roll number."
    });
    return;
  }

  if (error.name === "CastError") {
    res.status(400).json({
      success: false,
      message: "Invalid student id format."
    });
    return;
  }

  res.status(500).json({
    success: false,
    message: "Internal server error.",
    error: error.message
  });
}

app.get("/", (req, res) => {
  res.send(`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>MongoDB Dashboard - Mongoose API</title>
  <style>
    body { font-family: 'Segoe UI', system-ui, sans-serif; background: #f0fdf4; color: #1f2937; margin: 0; padding: 40px; }
    .container { max-width: 900px; margin: 0 auto; background: white; padding: 32px; border-radius: 12px; box-shadow: 0 10px 25px -5px rgba(22, 163, 74, 0.1); border-top: 4px solid #16a34a; }
    h1 { color: #16a34a; margin-top: 0; font-size: 26px; }
    p.desc { color: #4b5563; font-size: 15px; margin-bottom: 24px; line-height: 1.5; }
    .form-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 32px; background: #f0fdf4; padding: 24px; border-radius: 8px; border: 1px dashed #86efac; }
    input { width: 100%; padding: 12px; border: 1px solid #bbf7d0; border-radius: 6px; box-sizing: border-box; font-size: 14px; }
    input:focus { outline: none; border-color: #16a34a; box-shadow: 0 0 0 3px rgba(22, 163, 74, 0.2); }
    .btn { background: #16a34a; color: white; border: none; padding: 12px 24px; border-radius: 6px; cursor: pointer; font-weight: bold; font-size: 14px; transition: 0.2s; }
    .btn:hover { background: #15803d; }
    table { width: 100%; border-collapse: collapse; margin-top: 10px; }
    th, td { padding: 14px; text-align: left; border-bottom: 1px solid #e5e7eb; }
    th { background: #f0fdf4; color: #16a34a; font-weight: 600; text-transform: uppercase; font-size: 12px; letter-spacing: 0.5px; border-bottom: 2px solid #bbf7d0; }
    .action-btn { padding: 6px 12px; font-size: 13px; margin-right: 4px; border-radius: 4px; border: none; cursor: pointer; font-weight: 500; }
    .btn-delete { background: #fee2e2; color: #dc2626; }
    .btn-delete:hover { background: #fca5a5; }
    .btn-edit { background: #dcfce7; color: #16a34a; }
    .btn-edit:hover { background: #bbf7d0; }
  </style>
</head>
<body>
  <div class="container">
    <h1>MongoDB CRUD Operations</h1>
    <p class="desc">This dashboard interacts directly with your local MongoDB <code>studentDB</code> database. All changes made here are permanently saved via Mongoose models.</p>
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
              <button class="action-btn btn-edit" onclick="editStudent('\${s._id}', '\${s.name}', '\${s.rollNumber}', '\${s.department}', \${s.marks})">Edit</button>
              <button class="action-btn btn-delete" onclick="deleteStudent('\${s._id}')">Delete</button>
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

app.get("/students", async (req, res) => {
  try {
    const students = await Student.find().sort({ createdAt: -1 });
    res.json({
      success: true,
      count: students.length,
      data: students
    });
  } catch (error) {
    handleDatabaseError(error, res);
  }
});

app.post("/students", async (req, res) => {
  try {
    const student = await Student.create(req.body);
    res.status(201).json({
      success: true,
      message: "Student created successfully.",
      data: student
    });
  } catch (error) {
    handleDatabaseError(error, res);
  }
});

app.put("/students/:id", async (req, res) => {
  try {
    const updatedStudent = await Student.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });

    if (!updatedStudent) {
      res.status(404).json({ success: false, message: "Student not found." });
      return;
    }

    res.json({
      success: true,
      message: "Student updated successfully.",
      data: updatedStudent
    });
  } catch (error) {
    handleDatabaseError(error, res);
  }
});

app.delete("/students/:id", async (req, res) => {
  try {
    const deletedStudent = await Student.findByIdAndDelete(req.params.id);

    if (!deletedStudent) {
      res.status(404).json({ success: false, message: "Student not found." });
      return;
    }

    res.json({
      success: true,
      message: "Student deleted successfully.",
      data: deletedStudent
    });
  } catch (error) {
    handleDatabaseError(error, res);
  }
});

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB studentDB.");
    app.listen(PORT, () => {
      console.log(`MongoDB API server running at http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Failed to connect to MongoDB:", error.message);
  });
