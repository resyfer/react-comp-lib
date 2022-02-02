import TextInput from "./text/TextInput";
import PswdInput from "./pswd/PswdInput";
import OptionsInput from "./options/OptionsInput";

function Input(props) {
  switch (props.type) {
    case "password":
      return <PswdInput {...props} />;

    case "options":
      return <OptionsInput {...props} />;

    default:
      return <TextInput {...props} />;
  }
}

export default Input;
