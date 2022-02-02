import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";

import Break from "./components/Break";

import Button from "./components/buttons/Button";
import ButtonGroup from "./components/buttons/ButtonGroup";

import Input from "./components/form/Input";

import Accordion from "./components/accordion/Accordion";

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
            <Route
              path="accordion"
              element={
                <>
                  <p>Single</p>
                  <Accordion data={accordionData} />
                  <Break />
                  <p>Multiple</p>
                  <Accordion multiple data={accordionData} />
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

const accordionData = [
  {
    title: "Title 1",
    body: (
      <>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a velit
        ac augue dictum luctus id nec est. Suspendisse ut commodo arcu. Quisque
        turpis urna, tristique sed mauris vitae, convallis pretium tellus.
        Suspendisse suscipit vitae lectus aliquet dignissim. Etiam vel dui id
        arcu cursus rutrum. Donec ut posuere enim, id aliquam quam. Vestibulum
        pharetra nulla sapien, sed maximus neque pellentesque ac.
        <br />
        <br />
        Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere
        cubilia curae; Nullam mollis dui sed massa lobortis pharetra congue id
        neque. Aenean pretium sapien eget pulvinar pharetra. Nunc faucibus
        tortor in molestie cursus. Maecenas placerat quam libero, nec placerat
        nibh sagittis sed. In non rutrum ante. Nulla facilisi. Nam fermentum
        aliquet mi eget sollicitudin. Nam et risus elit. Pellentesque sit amet
        mi molestie, molestie mi eget, ornare neque. Morbi ut nunc id nisl
        egestas bibendum ornare id tortor. Aenean mauris magna, hendrerit et
        quam ac, laoreet pretium risus. Fusce vel egestas metus. Vivamus
        faucibus facilisis risus in iaculis.
      </>
    ),
  },
  {
    title:
      "An unncessarily long title so that I can show the title wraps when it exceeds the range of the container but I can't seem to get this long enough. This needs to be soooo long ugh.",
    body: (
      <>
        Donec eros ipsum, auctor sed convallis a, iaculis consectetur purus.
        Integer blandit porta quam nec dignissim. Morbi orci justo, commodo nec
        aliquet non, mollis at mauris. Nunc consequat purus id eros tincidunt,
        eget ultrices lectus dictum. In et quam ut mauris facilisis vulputate
        vitae a nisl. Suspendisse maximus arcu non bibendum suscipit. Nam
        convallis nunc ligula, ac sollicitudin quam commodo sed. Vivamus quis
        augue nec nisl blandit porttitor. Quisque nec tristique augue. Etiam
        faucibus consequat ligula ac auctor. Vestibulum imperdiet ligula vitae
        augue feugiat, non bibendum nulla dictum. Donec vestibulum vestibulum
        rhoncus.
        <br />
        <br />
        Ut convallis lacus eu neque feugiat semper. Etiam sodales sagittis purus
        nec tincidunt. Phasellus tempor, tortor ac gravida placerat, massa justo
        sodales diam, sit amet gravida lectus ante vitae felis. Lorem ipsum
        dolor sit amet, consectetur adipiscing elit. Quisque eget finibus
        sapien, non venenatis turpis. Cras elementum risus hendrerit ex
        consequat, vel pellentesque nibh tempor. Aenean non quam mollis, rutrum
        nunc sed, finibus sem.
      </>
    ),
  },
];

export default App;
