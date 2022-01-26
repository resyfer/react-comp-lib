import TextInput from "./TextInput";

function Input(props) {
  switch (props.type) {
    default:
      return <TextInput {...props} />;
  }
}

export default Input;
