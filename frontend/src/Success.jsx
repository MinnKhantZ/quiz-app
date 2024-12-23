import { useNavigate } from "react-router-dom";
import Check from "./assets/check.svg";

function Success() {
  const navigate = useNavigate();

  return (
    <>
      <div className="text-card">
        <h2>Successfully Added!</h2>
        <img src={Check} />
        <button onClick={() => navigate("/teacher")}>Go Back</button>
      </div>
    </>
  );
}
export default Success;
