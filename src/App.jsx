import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";

import Break from "./components/Break";

import Button from "./components/buttons/Button";
import ButtonGroup from "./components/buttons/ButtonGroup";

import Input from "./components/form/Input";

function App() {
  const [textInputValue, setTextInputValue] = useState("");
  const [optionsValue, setOptionsValue] = useState(-1);
  const [multiplOptionsValue, setMultipleOptionsValue] = useState([]);

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
              path="text-input"
              element={
                <>
                  <Input
                    value={textInputValue}
                    setValue={setTextInputValue}
                    placeholder="Name Full"
                    type="text"
                  />
                  <Break />
                  <Input
                    value={textInputValue}
                    setValue={setTextInputValue}
                    placeholder="Name Small"
                    trim
                    small
                    type="text"
                    verify={verify}
                  />
                  <Break />
                  <Input
                    value={textInputValue}
                    setValue={setTextInputValue}
                    placeholder="Name Tiny"
                    trim
                    tiny
                    type="text"
                  />
                </>
              }
            />
            <Route
              path="pswd-input"
              element={
                <>
                  <Input
                    value={textInputValue}
                    setValue={setTextInputValue}
                    placeholder="Pswd Full"
                    type="password"
                  />
                  <Break />
                  <Input
                    value={textInputValue}
                    setValue={setTextInputValue}
                    placeholder="Pswd Small"
                    trim
                    small
                    type="password"
                    verify={verify}
                  />
                  <Break />
                  <Input
                    value={textInputValue}
                    setValue={setTextInputValue}
                    placeholder="Pswd Tiny"
                    trim
                    tiny
                    type="password"
                  />
                </>
              }
            />
            <Route
              path="options-input"
              element={
                <>
                  <p>Single Choice</p>
                  <Input
                    value={optionsValue}
                    setValue={setOptionsValue}
                    options={options}
                    type="options"
                  />
                  <p>Choices Index: {optionsValue}</p>
                  <Break />
                  <p>Multiple Choice</p>
                  <Input
                    value={multiplOptionsValue}
                    setValue={setMultipleOptionsValue}
                    options={options}
                    type="options"
                    multiple
                  />
                  <p>Choices: [{multiplOptionsValue.join(", ")}]</p>
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

const options = [
  {
    name: "Option 1",
    value: 5,
  },
  {
    name: "Disabled Option",
    value: "hello world",
    disabled: true,
  },
  {
    name: "Option 3",
    value: true,
  },
];

function clickBtn({ e }) {
  console.log(e);
}

function verify(value) {
  if (value.length > 4)
    return {
      truth: true,
    };
  else
    return {
      truth: false,
      error: "Atleast 4 letters long",
    };
}

export default App;
