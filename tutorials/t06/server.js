import express from "express";
const app = express();
const PORT = 3000;
 
app.use(express.json());

function logger(req, res, next) {
  console.log(`[LOG] ${req.method} request received at ${req.url}`);
  next(); // without this the server hangs
}
app.use(logger);

let students = [
  { id: 1, name: "Alice", major: "Math" },
  { id: 2, name: "Bob", major: "Physics" },
  { id: 3, name: "Chloe", major: "Math" },
  { id: 4, name: "Dev", major: "Biology" },
];

app.get("/api/students", (req, res) => {
  if (req.query.major) {
    const filtered = students.filter((st) => st.major === req.query.major);
    return res.status(200).json(filtered);
  }
  res.status(200).json(students);
});
 
app.get("/api/students/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const student = students.find((st) => st.id === id);
  if (!student) {
    return res.status(404).json({ error: "Student not found." });
  }
  res.status(200).json(student);
});

app.post("/api/students", (req, res) => {
  const newStudent = {
    id: Date.now(),
    name: req.body.name,
    major: req.body.major,
  };
  students.push(newStudent);
  res.status(201).json(newStudent);
});
 
app.put("/api/students/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const student = students.find((st) => st.id === id);
  if (!student) {
    return res.status(404).json({ error: "Student not found." });
  }
  student.name = req.body.name || student.name;
  student.major = req.body.major || student.major;
  res.status(200).json(student);
});
 

app.delete("/api/students/:id", checkAuth, (req, res) => {
  const targetId = parseInt(req.params.id);
  students = students.filter((st) => st.id !== targetId);
  res.status(204).send();
});

app.get("/api/test-error", (req, res, next) => {
  next(new Error("This is a deliberate test error!"));
});
 

app.use((err, req, res, next) => {
  console.error("Critical System Failure: ", err.stack);
  res.status(500).json({ error: "Internal Server Error" });
});
 
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});


