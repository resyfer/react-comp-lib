import { useCallback } from "react";

import { useNavigate } from "react-router-dom";

function Button(props) {
  const navigate = useNavigate();

  // Calculate
  const size = useCallback(() => {
    if (props.small)
      return {
        px: "px-2",
        py: "py-1",
        fontSize: "text-xs",
      };
    else
      return {
        px: "px-3",
        py: "py-2",
        fontSize: "text-base",
      };
  }, [props])(props);

  const border = useCallback(() => {
    if (props.outline) {
      if (props.small) {
        return "border";
      } else {
        return "border-2";
      }
    } else {
      return "";
    }
  }, [props])(props);

  // Classes
  const staticClasses = ["text-center", "uppercase", "transition-colors"];
  props.classList && staticClasses.push(...props.classList);

  const dynamicList = useCallback(
    () => ({
      ...size,
      rounded: props.flat ? "" : "rounded",

      text: props.outline
        ? "text-primary focus:text-back"
        : "text-back hover:text-primary focus:text-back",

      bg: props.outline
        ? "focus:bg-tertiary"
        : "bg-primary hover:bg-secondary focus:bg-tertiary",

      border: props.outline
        ? `${border} border-transparent hover:border-primary focus:border-secondary`
        : "",

      disabled: props.disabled ? "cursor-not-allowed" : "",
    }),
    [props, border, size]
  )(props);

  return (
    <button
      className={
        Object.values(dynamicList).join(" ") + " " + staticClasses.join(" ")
      }
      onClick={(e) => {
        e.preventDefault();
        !props.disabled && navigate(props.link);
      }}
    >
      {props.text}
    </button>
  );
}

export default Button;
