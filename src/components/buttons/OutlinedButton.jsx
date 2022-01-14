import { useNavigate } from "react-router-dom";

function OutlinedButton(props) {
  const navigate = useNavigate();

  const size = (() => {
    if (props.small)
      return {
        py: "1",
        px: "2",
        fontSize: "xs",
        border: null,
      };
    else
      return {
        py: "2",
        px: "3",
        fontSize: "base",
        border: "2",
      };
  })();

  return (
    <button
      className={`
        py-${size.py}
        px-${size.px}
        text-${size.fontSize}
        rounded
        text-center
        uppercase
        transition-colors
        border${size.border ? `-${size.border}` : ""}
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
