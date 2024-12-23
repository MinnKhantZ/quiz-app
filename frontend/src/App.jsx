import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Student from "./Student";
import Teacher from "./Teacher";
import Login from "./Login";
import { useState, useEffect } from "react";
import Success from "./Success";

function App() {
  const [role, setRole] = useState(() => {
    const savedRole = sessionStorage.getItem("role");
    return savedRole ? savedRole : null;
  });

  useEffect(() => {
    sessionStorage.setItem("role", role);
  }, [role]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Login setRole={setRole} />} />
        <Route
          path="/student"
          element={role == "student" ? <Student /> : <Navigate to={"/"} />}
        />
        <Route
          path="/teacher"
          element={role == "teacher" ? <Teacher /> : <Navigate to={"/"} />}
        />
        <Route path="/success" element={<Success />} />
      </Routes>
    </>
  );
}

export default App;
