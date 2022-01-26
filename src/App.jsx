import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";

import Break from "./components/Break";

import Button from "./components/buttons/Button";
import ButtonGroup from "./components/buttons/ButtonGroup";

import Input from "./components/form/Input";

function App() {
  const [textInputValue, setTextInputValue] = useState("");

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route
              path="button"
              element={
                <>
                  <Button link="/" func={clickBtn} text="Button" />
                  <Break />
                  <Button link="/" flat text="Flat" />
                  <Break />
                  <Button link="/" disabled text="Disabled" />
                  <Break />
                  <Button link="/" outline text="Outline" />
                  <Break />
                  <Button link="/" outline disabled text="Disable" />
                  <Break />
                  <Button link="/" size="large" text="Large" />
                  <Break />
                  <Button link="/" size="small" text="Small" />
                </>
              }
            />
            <Route
              path="button-group"
              element={
                <>
                  <ButtonGroup buttons={buttonGroupData} />
                  <Break />
                  <ButtonGroup flat buttons={buttonGroupData} />
                  <Break />
                  <ButtonGroup outline buttons={buttonGroupData} />
                  <Break />
                  <ButtonGroup vertical buttons={buttonGroupData} />
                  <Break />
                  <ButtonGroup size="large" buttons={buttonGroupData} />
                  <Break />
                  <ButtonGroup size="small" buttons={buttonGroupData} />
                </>
              }
            />
            <Route
              path="input"
              element={
                <Input
                  value={textInputValue}
                  setValue={setTextInputValue}
                  placeholder="Username"
                />
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
    func: ({ e }) => {
      console.log(e);
    },
  },
  {
    text: "Link 2",
    link: "/",
  },
  {
    text: "Link 3",
    link: "/",
    disabled: true,
    classList: ["text-red-500"],
  },
];

function clickBtn({ e }) {
  console.log(e);
}

export default App;
