import { useNavigate } from "react-router-dom";

function Button(props) {
  const navigate = useNavigate();

  const size = (() => {
    if (props.small)
      return {
        py: 1,
        px: 2,
        fontSize: "xs",
      };
    else
      return {
        py: 2,
        px: 3,
        fontSize: "base",
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
        bg-primary
        text-back
        hover:bg-secondary
        hover:text-primary
        focus:bg-tertiary
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

export default Button;
