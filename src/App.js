// import logo from './logo.svg';
import './App.css';

let name = "Akash";
function App() {
  return (
    <>
      <nav>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </nav>

      <div className="container">
        {/* using variables */}
        <h1>Hello {name}</h1> 
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut labore assumenda est quaerat, natus eaque aliquid animi maxime omnis non nihil repellat. Magnam, tempora?</p>
      </div>
    </>
  );
}

export default App;
