const fs = require("fs");
const path = require("path");
const readline = require("readline");

const filePath = path.join(__dirname, "data.txt");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const initialStudentDetails = [
  "Name: Saarthak Manocha",
  "Roll Number: 1601-24-737-129",
  "Department: Information Technology",
  "Semester: IV (2026)"
].join("\n") + "\n";

function showMenu() {
  console.log("\n--- File System Operations (data.txt) ---");
  console.log("1. Write initial data to file (Overwrites existing)");
  console.log("2. Read and view file content");
  console.log("3. Append custom data to file");
  console.log("4. Exit");
  rl.question("Choose an option (1-4): ", handleChoice);
}

function handleChoice(choice) {
  switch (choice.trim()) {
    case '1':
      fs.writeFile(filePath, initialStudentDetails, "utf8", (err) => {
        if (err) console.error("Error writing file:", err.message);
        else console.log("=> Wrote initial student details to data.txt.");
        showMenu();
      });
      break;
    case '2':
      fs.readFile(filePath, "utf8", (err, data) => {
        if (err) {
          if (err.code === 'ENOENT') {
            console.error("=> File does not exist yet. Please write to it first (Option 1).");
          } else {
            console.error("Error reading file:", err.message);
          }
        } else {
          console.log("\n=> Current file content:\n----------------------\n" + data.trim() + "\n----------------------");
        }
        showMenu();
      });
      break;
    case '3':
      console.log("\n--- Enter New Student Details ---");
      rl.question("Name: ", (name) => {
        rl.question("Roll Number: ", (roll) => {
          rl.question("Department: ", (dept) => {
            rl.question("Marks: ", (marks) => {
              const appendData = `\nName: ${name}\nRoll Number: ${roll}\nDepartment: ${dept}\nMarks: ${marks}\n`;
              fs.appendFile(filePath, appendData, "utf8", (err) => {
                if (err) console.error("Error appending file:", err.message);
                else console.log("=> Successfully appended new data.");
                showMenu();
              });
            });
          });
        });
      });
      break;
    case '4':
      console.log("Exiting...");
      rl.close();
      break;
    default:
      console.log("=> Invalid choice. Please press 1, 2, 3, or 4.");
      showMenu();
      break;
  }
}

// Start the app
showMenu();
