import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Card = ({ num, question, answer, options }) => {
  const handleDelete = () => [
    fetch(`/api/data?num=${num}`, {
      method: "DELETE",
    }).then(() => {
      window.location.reload();
    }),
  ];

  return (
    <div className="card">
      <h2>
        {num}. {question}
      </h2>
      <ul>
        {options.map((op, index) => {
          return (
            <li key={index} className={answer == index && "correct"}>
              {op}
            </li>
          );
        })}
      </ul>
      <button onClick={handleDelete} className="delete">
        Delete
      </button>
    </div>
  );
};

const Form = ({ length }) => {
  return (
    <form action="/api/data" method="post">
      <h2>Add a quiz</h2>
      <input name="question" type="text" placeholder="Question" required />
      <span />
      <input name="options" type="text" placeholder="Option 1" required />
      <input name="options" type="text" placeholder="Option 2" required />
      <input name="options" type="text" placeholder="Option 3" required />
      <input name="options" type="text" placeholder="Option 4" required />
      <input type="hidden" name="num" value={length + 1} />

      <div className="answer-box">
        <h3>Correct Option:</h3>
        <div className="radio-box">
          <label htmlFor="answer1">
            <input type="radio" name="answer" id="answer1" value={0} required />
            <span>1</span>
          </label>
          <label htmlFor="answer2">
            <input type="radio" name="answer" id="answer2" value={1} required />
            <span>2</span>
          </label>
          <label htmlFor="answer3">
            <input type="radio" name="answer" id="answer3" value={2} required />
            <span>3</span>
          </label>
          <label htmlFor="answer4">
            <input type="radio" name="answer" id="answer4" value={3} required />
            <span>4</span>
          </label>
        </div>
      </div>
      <button type="submit">Add</button>
    </form>
  );
};

function Teacher() {
  const [quizzes, setQuizzes] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/api/data")
      .then((res) => res.json())
      .then((data) => setQuizzes(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <button className="home" onClick={() => navigate("/")}>
        Home
      </button>
      <h1>Hello Teacher</h1>
      <Form length={quizzes?.length} />
      {quizzes?.map((quiz, index) => {
        return (
          <Card
            key={index}
            num={quiz.num}
            question={quiz.question}
            answer={quiz.answer}
            options={quiz.options}
          />
        );
      })}
    </>
  );
}
export default Teacher;
