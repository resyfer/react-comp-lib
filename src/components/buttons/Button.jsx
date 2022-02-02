import { useCallback } from "react";

import { useNavigate } from "react-router-dom";

/**
 * Props:
 *    text (string)
 *    link (string)
 *    flat (bool)
 *    size (string: small | large)
 *    disabled (bool)
 *    outline (bool)
 *    classList ([string])
 *    func (function () => void)
 */

function Button(props) {
  const navigate = useNavigate();

  // Calculate
  const size = useCallback(() => {
    if (props.size === "small")
      return {
        px: "px-1 md:px-2",
        py: "py-1",
        fontSize: "text-micro md:text-xs",
      };
    else if (props.size === "large")
      return {
        px: "px-3 md:px-7",
        py: "py-2 md:py-4",
        fontSize: "text-sm md:text-base",
      };
    else
      return {
        px: "px-1 md:px-3",
        py: "py-1 md:py-2",
        fontSize: "text-xs md:text-sm",
      };
  }, [props])(props);

  const border = useCallback(() => {
    if (props.outline) {
      if (props.size === "small") {
        return "border";
      } else if (props.size === "large") {
        return "border-3";
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
  )();

  return (
    <button
      className={
        Object.values(dynamicList).join(" ") + " " + staticClasses.join(" ")
      }
      onClick={(e) => {
        e.preventDefault();
        props.func && props.func({ e });
        !props.disabled && navigate(props.link);
      }}
    >
      {props.text}
    </button>
  );
}

export default Button;
