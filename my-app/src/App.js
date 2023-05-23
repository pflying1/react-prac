/* import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
export default App; */

function MyButton() {
  return <button>I'm a button</button>;
}
function DivisionTwo() {
  return (
    <div>
      <div>division 이 한개</div>
      <div>division 이 두개</div>
    </div>
  );
}

export default function MyApp() {
  return (
    <div>
      <div>안녕하세요</div>
      <MyButton />
      <DivisionTwo />
    </div>
  );
}
