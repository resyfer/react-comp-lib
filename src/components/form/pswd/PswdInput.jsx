import { useState, useCallback } from "react";
import "./PswdInput.scss";

function TextInput(props) {
  const [reveal, setReveal] = useState(false);

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
        className="input-elem w-full bg-transparent pl-3 pr-8 h-full top-1/2 -translate-y-1/2 box-border border-2 border-primary/10 rounded focus:border-primary text-primary"
        type={reveal ? "text" : "password"}
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
      <span
        className="text-primary absolute right-2 top-1/2 -translate-y-1/2"
        onClick={() => setReveal(!reveal)}
      >
        {reveal ? (
          <i class="far fa-eye text-sm"></i>
        ) : (
          <i class="far fa-eye-slash text-sm"></i>
        )}
      </span>
    </div>
  );
}

export default TextInput;
