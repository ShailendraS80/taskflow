# TaskFlow – AI Powered Task Management System

## 🚀 Overview

TaskFlow is a full-stack AI-powered task management application that helps users organize their work using boards and tasks. Users can create multiple boards, manage tasks efficiently, track progress, and use AI assistance to generate task ideas.

The application is built using the MERN stack and features secure JWT authentication, responsive design, dark/light mode, and AI integration using Google's Gemini API.

---

## ✨ Features

### Authentication

* User Registration
* User Login
* JWT Authentication
* Protected Routes
* Secure Password Hashing

### Board Management

* Create Boards
* Edit Boards
* Delete Boards
* Personal Boards for Each User

### Task Management

* Create Tasks
* Edit Tasks
* Delete Tasks
* Move Tasks Between Status Columns
* Task Priorities
* Due Dates
* Overdue Indicators

### Dashboard

* Board Statistics
* Total Tasks
* Completed Tasks
* Pending Tasks
* Responsive Dashboard

### Search & Filtering

* Search Tasks
* Filter by Priority
* Filter by Status

### AI Integration

* Gemini AI Task Generator
* Prompt-Based Task Suggestions

### User Experience

* Dark Mode
* Light Mode
* Loading States
* Error Handling
* Empty States
* Custom 404 Page
* Responsive Design

---

## 🛠 Tech Stack

### Frontend

* React.js
* React Router
* Tailwind CSS
* Axios
* Context API
* Lucide React

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT
* bcryptjs

### AI

* Google Gemini API

---

## 📂 Project Structure

client/

* src/

  * components/
  * context/
  * pages/
  * services/
  * api/

server/

* controllers/
* models/
* routes/
* middleware/
* config/

---

## ⚙️ Installation

### Clone Repository

```bash
git clone <repository-url>
```

### Install Dependencies

Frontend

```bash
cd client
npm install
```

Backend

```bash
cd server
npm install
```

### Run Backend

```bash
npm run dev
```

### Run Frontend

```bash
npm run dev
```

---

## 🔐 Environment Variables

Backend (.env)

```env
PORT=
MONGO_URI=
JWT_SECRET=
```

Frontend (.env)

```env
VITE_API_URL=
VITE_GEMINI_API_KEY=
```

---

## 🌐 API Endpoints

### Authentication

* POST /api/auth/register
* POST /api/auth/login

### Boards

* GET /api/boards
* POST /api/boards
* PUT /api/boards/:id
* DELETE /api/boards/:id

### Tasks

* GET /api/tasks
* POST /api/tasks
* PUT /api/tasks/:id
* PATCH /api/tasks/:id/status
* DELETE /api/tasks/:id

---

## 🤖 AI Integration

TaskFlow integrates Google's Gemini API to generate task ideas based on user prompts, helping users quickly break down projects into actionable tasks.

---

## 📸 Screenshots

(Add screenshots here after capturing them.)

---

## 🚀 Deployment

Frontend: (Add Vercel URL)

Backend: (Add Render URL)

---

## 🔮 Future Improvements

* Drag-and-drop task movement
* Team collaboration
* Email notifications
* Calendar integration
* Activity logs
* Real-time updates with WebSockets

---

## 👨‍💻 Author

Shailendra Sharma

GitHub: https://github.com/ShailendraS80
