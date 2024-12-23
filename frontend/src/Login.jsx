import { useNavigate } from "react-router-dom";
import student from "./assets/student-reading.svg";
import teacher from "./assets/teacher-teaching.svg";

function Login({ setRole }) {
  const navigate = useNavigate();

  const handleLogin = (role) => {
    setRole(role);
    navigate(`/${role}`);
  };

  return (
    <div className="login">
      <button onClick={() => handleLogin("student")}>
        <img src={student} />
        <p>Login as Student</p>
      </button>
      <button onClick={() => handleLogin("teacher")}>
        <img src={teacher} />
        <p>Login as Teacher</p>
      </button>
    </div>
  );
}
export default Login;
