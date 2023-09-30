import { useState } from 'react';
import './App.css';
import styled from 'styled-components';

function App() {
  const questions = [
    {
      questionText: 'How are you ?',
      answerOptions: [
        { answerText: "I'm good, thanks.", isCorrect: true },
        { answerText: "I'm doing well, how about you?", isCorrect: false },
        {
          answerText: 'Not too bad, how are things with you?',
          isCorrect: false,
        },
        {
          answerText: "I'm feeling great today, what about yourself?",
          isCorrect: false,
        },
      ],
    },
    {
      questionText: 'Do you know me ?',
      answerOptions: [
        { answerText: '"Yes, I know you."', isCorrect: false },
        { answerText: "No, I don't know you.", isCorrect: true },
        { answerText: "I think we've met before.", isCorrect: false },
        {
          answerText:
            "It's hard for me to say, can you tell me more about yourself?",
          isCorrect: false,
        },
      ],
    },
    {
      questionText: 'What letter does your name start with?',
      answerOptions: [
        { answerText: 'A', isCorrect: true },
        { answerText: 'S', isCorrect: true },
        { answerText: 'N', isCorrect: true },
        { answerText: 'B', isCorrect: true },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleQuestion = (isCorrect) => {
    if (isCorrect === true) {
      setScore(score + 1);
    }
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };
  const gotostart = () => {
    setCurrentQuestion(0);
    setShowResult(false);
    setScore(0);
  };

  return (
    <div className="App" style={{backgroundColor: 'gray', width: '100%', height: '100vh', color: 'white'}}>
      {showResult ? (
        <div>
          You scored {score}/{questions.length}
          <ResultButton onClick={gotostart}>Back to beginning</ResultButton>
        </div>
      ) : (
        <>
          <QuestoinSection className="question-section">
            <div className="question-count">
              <span>Question {currentQuestion + 1}</span>/{questions.length}
            </div>
            <div className="question-text">
              {questions[currentQuestion].questionText}
            </div>
          </QuestoinSection>
          <StyledButton className="answer-section">
            {questions[currentQuestion].answerOptions.map((answerOption) => {
              return (
                <button onClick={() => handleQuestion(answerOption.isCorrect)}>
                  {answerOption.answerText}
                </button>
              );
            })}
          </StyledButton>
        </>
      )}
    </div>
  );
}

const StyledButton = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: start;
  & > button {
    margin-left: 100px;
    margin-top: 30px;
    background-color: #383838;
    color: #fff;
    padding: 10px;
  }
`;
const ResultButton = styled('button')`
  margin-left: 100px;
  margin-top: 30px;
  background-color: #383838;
  color: #fff;
  padding: 10px;
`;
const QuestoinSection = styled('div')`
  margin-left: 100px;
  & > .question-text {
    margin-top: 24px;
    width: fit-content;
    background-color: #ff0000;
    color: #fff;
    padding: 10px;
  }
`;

export default App;
