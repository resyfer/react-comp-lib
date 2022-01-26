import { useCallback } from "react";
import "./TextInput.scss";

function TextInput(props) {
  const dynamicList = useCallback(
    () => ({
      width: props.tiny
        ? "w-1/2 lg:w-1/4"
        : props.small
        ? "w-3/4 lg:w-1/2"
        : "w-full",
    }),
    [props]
  )();

  return (
    <div className={`input-cont h-12 ${Object.values(dynamicList).join(" ")}`}>
      <input
        className="input-elem w-full bg-transparent pl-3 pr-2 h-full top-1/2 -translate-y-1/2 box-border border-2 border-primary/10 rounded focus:border-primary text-primary"
        type="text"
        htmlFor={props.for}
        name={props.name}
        onChange={(e) =>
          props.setValue(() => {
            if (props.trim) return e.target.value.trim();
            return e.target.value;
          })
        }
        value={props.value}
        placeholder={props.placeholder} //Hidden in css but required for selectors
      />
      <span className="input-text pl-3 pr-2 top-1/2 -translate-y-1/2 pointer-events-none text-primary">
        {props.placeholder}
      </span>
    </div>
  );
}

export default TextInput;
