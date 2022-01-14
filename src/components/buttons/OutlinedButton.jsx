import { useCallback } from "react";

import { useNavigate } from "react-router-dom";

function OutlinedButton(props) {
  const navigate = useNavigate();

  const size = useCallback(() => {
    if (props.small)
      return {
        px: "px-2",
        py: "py-1",
        fontSize: "text-xs",
        border: "",
      };
    else
      return {
        px: "px-3",
        py: "py-2",
        fontSize: "text-base",
        border: "border-2",
      };
  }, [props])(props);

  return (
    <button
      className={`
        ${size.py}
        ${size.px}
        ${size.fontSize}
        rounded
        text-center
        uppercase
        transition-colors
        ${size.border}
        border-transparent
        text-primary
        hover:border-primary
        focus:bg-tertiary
        focus:border-secondary
        focus:text-back
        ${props.disabled ? "cursor-not-allowed" : ""}
        `}
      onClick={(e) => {
        e.preventDefault();
        !props.disabled && navigate(props.link);
      }}
    >
      {props.text}
    </button>
  );
}

export default OutlinedButton;
