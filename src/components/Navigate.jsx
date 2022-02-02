import { Link } from "react-router-dom";

function Navigate() {
  return (
    <ul className="list-disc ml-4 mt-5">
      <li>
        {" "}
        Buttons
        <ul className="list-decimal ml-4">
          <li>
            <Link to="/button">Normal Button</Link>
          </li>
          <li>
            <Link to="/button-group">Button Group</Link>
          </li>
        </ul>
      </li>
      <li>
        {" "}
        Forms
        <ul className="list-decimal ml-4">
          <li>
            <Link to="/text-input">Text Input</Link>
          </li>
          <li>
            <Link to="/pswd-input">Password Input</Link>
          </li>
          <li>
            <Link to="/options-input">Options Input</Link>
          </li>
        </ul>
      </li>
    </ul>
  );
}

export default Navigate;
