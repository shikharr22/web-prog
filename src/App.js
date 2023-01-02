import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="container">
      <div className="navbar"></div>
      <div className="tabs-display">
        <div className="tabs">
          <ul className="tabs-list">
            <li className="tab-item">Home</li>
            <li className="tab-item">Courses Offered</li>
            <li className="tab-item">Placements</li>
            <li className="tab-item">Faculty</li>
          </ul>
        </div>

        <div className="display"></div>
      </div>
    </div>
  );
}

export default App;
