const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const app = express();
app.use(cors());
app.use(express.json());

// Adding custom Express.js middleware
app.use((req, res, next) => {
  // Add your custom logic here
  console.log('The server is running');
  next();
});

mongoose.connect("mongodb://127.0.0.1:27017/studentInfo", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});

const studentSchema = new mongoose.Schema({
  name: String,
  age: Number,
  major: String,
});

const Students = mongoose.model('Students', studentSchema);

// 导入路由文件
const authRoutes = require('./authRoutes');

// 使用路由文件
app.use('/api/auth', authRoutes);

//database data to connect angular
app.get("/studentInfo", async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.json(contacts);
  } catch (error) {
    res.status(500).json({ error: "Error retrieving contacts" });
  }
});

// 获取单个联系人
app.get("/studentInfo/:id", async (req, res) => {
  try {
    const students = await Contact.findById(req.params.id);
    if (students) {
      res.json(students);
    } else {
      res.status(404).json({ error: "Contact not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Error retrieving contact" });
  }
});

// 添加新联系人
app.post("/studentInfo", async (req, res) => {
  try {
    const students = await Students.create(req.body);
    res.status(201).json(contact);
  } catch (error) {
    res.status(500).json({ error: "Error adding contact" });
  }
});

// 更新联系人信息
app.put("/studentInfo/:id", async (req, res) => {
  try {
    const students = await Students.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (contact) {
      res.json(contact);
    } else {
      res.status(404).json({ error: "Contact not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Error updating contact" });
  }
});

// 删除联系人
app.delete("/studentInfo/:id", async (req, res) => {
  try {
    const students = await Students.findByIdAndDelete(req.params.id);
    if (contact) {
      res.json({ message: "Contact deleted successfully" });
    } else {
      res.status(404).json({ error: "Contact not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Error deleting contact" });
  }
});


// Serve static assets for Angular application
app.use(express.static(path.join(__dirname, 'dist/your-app-name')));

// Set the view engine to EJS
app.set('view engine', 'ejs');

// Specify the directory for view files (relative to the project root)
app.set('views', path.join(__dirname, 'src/views'));

app.get('/', (_req, res) => {
  res.render('home', { activePage: 'home', headerActivePage: 'home' });
});

app.get('/home', (_req, res) => {
  res.render('home', { activePage: 'home', headerActivePage: 'home' });
});

app.get('/about', (_req, res) => {
  res.render('about', { activePage: 'about' });
});

app.get('/project', (_req, res) => {
  res.render('project', { activePage: 'project' });
});

app.get('/services', (_req, res) => {
  res.render('services', { activePage: 'services' });
});

app.get('/contact', (_req, res) => {
  res.render('contact', { activePage: 'contact' });
});

app.get('/user/login-form', (_req, res) => {
  res.render('login-form', { activePage: 'login-form' });
});

app.get('/user/business-contacts', (_req, res) => {
  res.render('business-contacts', { activePage: 'business-contacts' });
});

app.use(express.static(path.join(__dirname, 'public')));

// Listening on the port
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
