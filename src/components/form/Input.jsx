import TextInput from "./text/TextInput";
import PswdInput from "./pswd/PswdInput";

function Input(props) {
  switch (props.type) {
    case "password":
      return <PswdInput {...props} />;

    default:
      return <TextInput {...props} />;
  }
}

export default Input;
