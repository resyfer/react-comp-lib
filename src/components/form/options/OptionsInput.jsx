import { useCallback } from "react";

import "./OptionsInput.scss";

/**
 * Props:
 *    type ("options")
 *    value (int | [any])   [useState, stores index for single, array of values for multiple]
 *    setValue    [useState]
 *    options ({
 *        name: string
 *        value: any
 *        disabled: true/false (default false)
 *    })
 *    multiple (bool)  [True makes it multiple choice]
 */

function OptionsInput(props) {
  // Classes for outer container of each choice
  const containerClass = useCallback(
    () => ({
      marginY: "my-1",
      flex: "flex flex-row justify-start align-middle",
    }),
    []
  )();

  // Classes for each option
  const optionClass = useCallback(
    () => ({
      height: "h-5",
      width: "w-5",
      backgroundColor: "bg-primary",
    }),
    []
  )();

  // Each option has the checkbox and the value (in span). The after of the checkbox gets
  // styled.
  return (
    <div className="radio">
      {props.options.map((option, index) => (
        <div
          className={"input-cntr " + Object.values(containerClass).join(" ")}
          key={option.name + " " + index}
        >
          <input
            type="checkbox"
            name={option.name}
            id={option.name}
            value={option.value}
            checked={
              props.multiple
                ? props.value.includes(option.value)
                : props.value === option.value
            }
            className={`checkbox ${Object.values(optionClass).join(" ")} ${
              option.disabled ? "cursor-not-allowed" : ""
            }`}
            onChange={(e) => {
              if (option.disabled) {
                return;
              } else if (e.target.checked) {
                if (props.multiple)
                  props.setValue(() => [...props.value, option.value]);
                else props.setValue(option.value);
              } else {
                if (props.multiple)
                  props.setValue(() =>
                    props.value.filter((elem) => elem !== option.value)
                  );
                else props.setValue(null);
              }
            }}
          />

          <span className="text-primary pl-2 relative">{option.name}</span>
        </div>
      ))}
    </div>
  );
}

export default OptionsInput;
