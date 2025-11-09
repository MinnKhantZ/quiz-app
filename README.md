# Quiz Application 📚

A full-stack quiz platform that allows teachers to create and manage quizzes, and students to take them interactively.

![Node.js](https://img.shields.io/badge/Node.js-18+-green)
![Express](https://img.shields.io/badge/Express-4.21.2-blue)
![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-green)
![React](https://img.shields.io/badge/React-18.3.1-blue)
![Vite](https://img.shields.io/badge/Vite-6.0.1-purple)

## ✨ Features

### 👨‍🎓 Student Experience
- **Interactive Quiz Taking**: Answer questions one by one with immediate feedback
- **Answer Validation**: Check answers and retry incorrect ones
- **Progress Tracking**: See completion status and navigate through questions
- **Celebration**: Special message upon completing all quizzes
- **Responsive Design**: Optimized for all devices

### 👨‍🏫 Teacher Features
- **Quiz Creation**: Add new quizzes with multiple choice questions
- **Quiz Management**: View all created quizzes with correct answers highlighted
- **Quiz Deletion**: Remove quizzes as needed
- **Success Feedback**: Confirmation after adding new quizzes

### 🔧 Technical Features
- **Role-Based Access**: Separate interfaces for students and teachers
- **Session Management**: Persistent login state during session
- **RESTful API**: Clean backend endpoints for quiz operations
- **Database Integration**: MongoDB for quiz storage
- **Modern Frontend**: React with Vite for fast development

## 🛠️ Tech Stack

- **Backend**: Node.js, Express.js, MongoDB (Mongoose)
- **Frontend**: React 18, Vite, React Router DOM
- **Database**: MongoDB Atlas
- **HTTP Client**: Fetch API
- **Development Tools**: Nodemon, ESLint
- **Styling**: Custom CSS with responsive design

## 📋 Prerequisites

Before you begin, ensure you have:

- **Node.js** 18 or higher
- **npm** (comes with Node.js)
- **MongoDB Atlas** account (or local MongoDB instance)
- **Git**

## 🚀 Quick Start

### 1. Clone Repository

```bash
git clone <your-repo-url>
cd quiz-app
```

### 2. Install Dependencies

Install backend dependencies:

```bash
npm install
```

Install frontend dependencies:

```bash
cd frontend
npm install
cd ..
```

### 3. Environment Setup

Create `.env` file in the root directory:

```env
DB_URL="your-mongodb-connection-string"
PORT=3000
```

**MongoDB Setup:**
- Create a MongoDB Atlas cluster or use local MongoDB
- Get your connection string from Atlas dashboard
- Replace `<username>`, `<password>`, and `<database>` in the URL

### 4. Development

Start the backend server:

```bash
npm run dev
```

In a new terminal, start the frontend:

```bash
cd frontend
npm run dev
```

The application will be available at:
- **Frontend**: http://localhost:5173
- **Backend API**: http://localhost:3000

### 5. Production Build

Build the frontend:

```bash
npm run build
```

Start the production server:

```bash
npm start
```

The app will be served at http://localhost:3000

## 📁 Project Structure

```
quiz-app/
├── index.js                 # Backend server entry point
├── package.json             # Backend dependencies and scripts
├── .env                     # Environment variables
├── frontend/
│   ├── src/
│   │   ├── App.jsx          # Main React app component
│   │   ├── Login.jsx        # Role selection page
│   │   ├── Student.jsx      # Student quiz interface
│   │   ├── Teacher.jsx      # Teacher management interface
│   │   ├── Success.jsx      # Success confirmation page
│   │   ├── App.css          # Main styles
│   │   └── assets/          # Static assets (SVGs)
│   ├── package.json         # Frontend dependencies
│   ├── vite.config.js       # Vite configuration
│   └── index.html           # HTML template
└── README.md               # This file
```

## 🔌 API Endpoints

### Quiz Management
- `GET /api/data` - Retrieve all quizzes
- `POST /api/data` - Create new quiz
- `DELETE /api/data?num=<number>` - Delete quiz by number

### Answer Checking
- `GET /api/check?num=<number>&option=<index>` - Validate answer

## 🎯 Usage

### For Students
1. Select "Login as Student" on the homepage
2. Answer questions by clicking on options
3. Click "Check" to validate your answer
4. If correct, proceed to next question
5. If incorrect, retry the same question
6. Complete all quizzes to see celebration message

### For Teachers
1. Select "Login as Teacher" on the homepage
2. Add new quizzes using the form (question + 4 options + correct answer)
3. View all existing quizzes with correct answers highlighted
4. Delete quizzes using the delete button

## 🔧 Development Scripts

### Backend
- `npm start` - Start production server
- `npm run dev` - Start development server with auto-reload
- `npm run build` - Install dependencies for both backend and frontend

### Frontend
- `npm run dev` - Start Vite development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🚀 Deployment

### Backend Deployment
Deploy the backend to services like Heroku, Railway, or Vercel:

1. Set environment variables in your deployment platform
2. Update MongoDB connection string for production
3. Deploy from the root directory

### Frontend Deployment
The frontend is configured to proxy API calls to the backend. For deployment:

1. Build the frontend: `npm run build`
2. The `dist` folder contains the production build
3. Deploy to Netlify, Vercel, or any static hosting service
4. Update API proxy URL in `vite.config.js` for production

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Make your changes and test thoroughly
4. Commit your changes: `git commit -am 'Add new feature'`
5. Push to the branch: `git push origin feature-name`
6. Submit a pull request

## 📝 License

This project is licensed under the ISC License.

## 👨‍💻 Author

**Min Khant Zaw**

- GitHub: [MinnKhantZ](https://github.com/MinnKhantZ)
- LinkedIn: [Your LinkedIn]

---

Built with ❤️ using Node.js, Express, React, and MongoDB</content>
<parameter name="filePath">c:\Users\Min\Documents\quiz-app\README.md