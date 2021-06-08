import React from "react";

class Test2 extends React.Component {
  renderQuestion = (myQuestions) => {
    {
      myQuestions.map((question) => {
        return (
          <div>
            <h1>Quest : {question.question}</h1>
          </div>
        );
      });
    }
  };
  render() {
    const myQuestions = [
      {
        question: "1 + 2 is ?",
        answers: {
          answer: ["1", "2", "3"],
        },
        correctAnswer: 2,
      },
      {
        question: "What is the best site for Web Programmer ?",
        answers: { answer: ["Stack Overflow", "Quora", "w3school"] },
        correctAnswer: 0,
      },
      {
        question: "Who is Prime minister fo Thailand ?",
        answers: {
          answer: [
            "Prayut Chan-o-cha",
            "Yingluck Shinawatra",
            "Abhisit Vejjajiva",
            "Somchai Wongsawat",
          ],
        },
        correctAnswer: 0,
      },
    ];

    return <div id="question-section">{this.renderQuestion(myQuestions)}</div>;
  }
}
export default Test2;
