import PropTypes from "prop-types";
import "./App.css";

function PlusButton({ text }) {
  return (
    <button className="plus-button">
      <h1>+</h1>
      <h2>{text}</h2>
    </button>
  );
}

function App() {
  return (
    <div className="App">
      <PlusButton text="Add Course" />
      <PlusButton text="Add lesson" />
      <PlusButton text="Add Quiz" />
    </div>
  );
}

PlusButton.propTypes = {
  text: PropTypes.string,
};

export default App;
