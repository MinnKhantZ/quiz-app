import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Celebrate from "./assets/celebration.svg";

const Option = ({
  options,
  selectIndex,
  setSelectIndex,
  isChecked,
  isTrue,
}) => {
  const handleSelect = (index) => {
    if (!isChecked) {
      setSelectIndex(index);
    }
  };

  return (
    <ul>
      {options?.map((op, index) => {
        return (
          <li
            key={index}
            onClick={() => handleSelect(index)}
            className={
              index == selectIndex
                ? isChecked
                  ? isTrue
                    ? "correct"
                    : "wrong"
                  : "clicked"
                : ""
            }
          >
            {op}
          </li>
        );
      })}
    </ul>
  );
};

const Card = ({ quiz, setCurrentCard }) => {
  const [selectIndex, setSelectIndex] = useState(null);
  const [isTrue, setIsTrue] = useState(null);
  const [isChecked, setIsChecked] = useState(false);

  const handleCheck = () => {
    if (!isChecked) {
      fetch(`/api/check?num=${quiz.num}&option=${selectIndex}`)
        .then((res) => res.json())
        .then((data) => {
          setIsTrue(data.status);
          setIsChecked(true);
        })
        .catch((err) => console.error(err));
    } else {
      setIsChecked(!isChecked);
      setSelectIndex(null);
      if (isTrue) {
        setCurrentCard((num) => num + 1);
        setIsTrue(false);
      }
    }
  };

  return (
    <div className="card">
      <h2>
        {quiz?.num}. {quiz?.question}
      </h2>
      <Option
        options={quiz?.options}
        selectIndex={selectIndex}
        setSelectIndex={setSelectIndex}
        isChecked={isChecked}
        isTrue={isTrue}
      />
      <button onClick={handleCheck}>
        {isChecked ? (isTrue ? "Next" : "Retry") : "Check"}
      </button>
    </div>
  );
};

function Student() {
  const [quizzes, setQuizzes] = useState([]);
  const [currentCard, setCurrentCard] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/api/data")
      .then((res) => res.json())
      .then((data) => setQuizzes(data.reverse()))
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <button className="home" onClick={() => navigate("/")}>
        Home
      </button>
      {quizzes.length != 0 ? (
        quizzes?.length == currentCard ? (
          <div className="text-card">
            <h2>You have completed all quizzes</h2>
            <img src={Celebrate} />
          </div>
        ) : (
          <Card quiz={quizzes[currentCard]} setCurrentCard={setCurrentCard} />
        )
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}

export default Student;
