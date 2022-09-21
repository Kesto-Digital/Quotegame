import "./App.css";

function App() {
  return (
    <div className="Background">
      <div className="QuestionGroup">
        <div className="RadioButton">
          <input type="radio" value="Choice1" name="choice" /> Answer1
        </div>
        <div className="RadioButton">
          <input type="radio" value="Choice2" name="choice" /> Answer2
        </div>
        <div className="RadioButton">
          <input type="radio" value="Choice3" name="choice" /> Answer3
        </div>
      </div>
      <div className="SubmitGroup">
        <div className="SubmitButton">
          <input type="button" value="Submit" />
        </div>
        <div className="SubmitButton">
          <input type="button" value="Next" />
        </div>
      </div>
    </div>
  );
}

export default App;
