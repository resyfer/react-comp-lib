import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";

import Button from "./components/buttons/Button";
import OutlinedButton from "./components/buttons/OutlinedButton";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route
              path="button"
              element={
                <>
                  <Button link="/" text="Button" />
                  {/* <br />
                  <br />
                  <Button link="/" disabled text="Button" /> */}
                </>
              }
            />
            <Route
              path="outlined-button"
              element={<OutlinedButton link="#" text="Outline" />}
            />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
