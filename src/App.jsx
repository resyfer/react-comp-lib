import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";

import Button from "./components/buttons/Button";
import ButtonGroup from "./components/buttons/ButtonGroup";

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
                  <br />
                  <br />
                  <Button link="/" flat text="Flat" />
                  <br />
                  <br />
                  <Button link="/" disabled text="Disabled" />
                  <br />
                  <br />
                  <Button link="/" outline text="Outline" />
                  <br />
                  <br />
                  <Button link="/" outline disabled text="Disable" />
                  <br />
                  <br />
                  <Button link="/" small text="Small" />
                </>
              }
            />
            <Route
              path="button-group"
              element={
                <>
                  <ButtonGroup buttons={buttonGroupData} />
                  <br />
                  <br />
                  <ButtonGroup flat buttons={buttonGroupData} />
                  <br />
                  <br />
                  <ButtonGroup outline buttons={buttonGroupData} />
                  <br />
                  <br />
                  <ButtonGroup small buttons={buttonGroupData} />
                </>
              }
            />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

const buttonGroupData = [
  {
    text: "Link 1",
    link: "/",
    outline: true,
  },
  {
    text: "Link 2",
    link: "/",
  },
  {
    text: "Link 3",
    link: "/",
    disabled: true,
  },
];

export default App;
