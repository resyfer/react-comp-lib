import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";

import Button from "./components/Button";
import OutlinedButton from "./components/OutlinedButton";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="button" element={<Button link="/" text="Button" />} />
            <Route
              path="outlined-button"
              element={<OutlinedButton link="/" text="Outline" />}
            />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
