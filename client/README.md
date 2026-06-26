# 🚀 TaskFlow – AI Powered Task Management System

## 📌 Overview

TaskFlow is a full-stack task management application that helps users organize their work using boards and tasks. The application supports secure user authentication, task management, board organization, search and filtering, and AI-assisted task generation. It is built using the MERN stack and deployed with Render and Vercel.

---

## 🌐 Live Demo

**Frontend:** https://taskflow-dusky-two.vercel.app/

**Backend API:** https://taskflow-backend-jte3.onrender.com/

---

# ✨ Features

### 🔐 Authentication

* User Registration
* User Login
* JWT Authentication
* Protected Routes
* Persistent Login using Local Storage

### 📋 Board Management

* Create Boards
* View Boards
* Open Individual Boards

### ✅ Task Management

* Create Tasks
* Edit Tasks
* Delete Tasks
* Update Task Status
* Priority Levels
* Due Date Support

### 🔍 Search & Filter

* Search Tasks by Title
* Search Tasks by Description
* Filter Tasks by Priority

### 🤖 AI Integration

* AI-assisted Task Generation using Google Gemini API
* Generate multiple actionable tasks from a project description
* Handles API failures gracefully

### 🎨 User Experience

* Responsive UI
* Toast Notifications
* Clean Dashboard Layout
* Modern Tailwind CSS Design

---

# 🛠 Tech Stack

## Frontend

* React.js
* React Router DOM
* Axios
* Tailwind CSS
* React Hot Toast
* Lucide React

## Backend

* Node.js
* Express.js
* MongoDB Atlas
* Mongoose
* JWT Authentication
* bcryptjs
* CORS
* Helmet

## Deployment

* Vercel (Frontend)
* Render (Backend)
* MongoDB Atlas (Database)

---

# 📂 Project Structure

```
taskflow
│
├── client
│   ├── src
│   │   ├── api
│   │   ├── components
│   │   ├── context
│   │   ├── pages
│   │   ├── routes
│   │   ├── services
│   │   └── ...
│
├── server
│   ├── config
│   ├── controllers
│   ├── middleware
│   ├── models
│   ├── routes
│   └── ...
│
└── README.md
```

---

# 🧩 System Architecture

```
React Frontend
      │
      │ Axios Requests
      ▼
Express REST API
      │
JWT Authentication
      │
Controllers
      │
Mongoose
      │
MongoDB Atlas
```

---

# 🔐 Authentication Flow

1. User Registers
2. Password is encrypted using bcrypt
3. JWT Token is generated
4. Token is stored in Local Storage
5. Protected Routes validate the token
6. User gains access to Dashboard

---

# 📡 REST API Endpoints

## Authentication

| Method | Endpoint           |
| ------ | ------------------ |
| POST   | /api/auth/register |
| POST   | /api/auth/login    |
| GET    | /api/auth/me       |

---

## Boards

| Method | Endpoint        |
| ------ | --------------- |
| GET    | /api/boards     |
| POST   | /api/boards     |
| PUT    | /api/boards/:id |
| DELETE | /api/boards/:id |

---

## Tasks

| Method | Endpoint              |
| ------ | --------------------- |
| GET    | /api/tasks            |
| POST   | /api/tasks            |
| PUT    | /api/tasks/:id        |
| DELETE | /api/tasks/:id        |
| PATCH  | /api/tasks/:id/status |

---

# ⚙️ Installation

## Clone Repository

```bash
git clone https://github.com/ShailendraS80/taskflow.git
```

## Install Dependencies

### Backend

```bash
cd server
npm install
```

### Frontend

```bash
cd client
npm install
```

---

# ▶️ Run Locally

## Backend

```bash
npm run dev
```

## Frontend

```bash
npm run dev
```

---

# 🔑 Environment Variables

## Server (.env)

```
PORT=5000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_secret_key
```

## Client (.env)

```
VITE_API_URL=http://localhost:5000/api

VITE_GEMINI_API_KEY=your_gemini_api_key
```

---

# 📷 Screenshots

Add screenshots of the following pages:

* Login Page
* Register Page
* Dashboard
* Board View
* Create Task Modal
* AI Task Generator
* Search & Filter
* Responsive Mobile View

---

# 🚀 Future Enhancements

* Drag & Drop Tasks
* Team Collaboration
* Role-Based Access
* Email Notifications
* Calendar View
* File Attachments
* Dark / Light Theme
* Activity Logs
* Real-time Updates using Socket.io

---

# 👨‍💻 Author

**Shailendra Sharma**

GitHub: https://github.com/ShailendraS80

LinkedIn: https://www.linkedin.com/in/shailendra2726/

---

# 📄 License

This project is created for educational and portfolio purposes.
