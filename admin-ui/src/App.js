import './App.css';

function PlusButton(props) {
  return (
      <button className="plus-button">
        <h1>+</h1>
        <h2>{props.text}</h2>
      </button>
  )
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

export default App;
