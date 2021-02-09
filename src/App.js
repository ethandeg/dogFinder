import logo from './logo.svg';
import Routes from "./Routes"
import { BrowserRouter } from "react-router-dom"
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="container">
          <Routes />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
