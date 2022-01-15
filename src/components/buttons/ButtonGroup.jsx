import Button from "./Button";

/**
 * Props:
 *    flat (bool)
 *    small (bool)
 *    outline (bool)
 *    vertical (bool)
 *
 * Button keys:
 *    text (string)
 *    link (string)
 *    disabled (bool)
 *    outline (bool)
 *    classList ([string])
 *    func (function () => void)
 */

function ButtonGroup(props) {
  return (
    <div
      className={`
      flex
      ${props.vertical ? "flex-col" : ""}
      overflow-hidden
      w-fit
      ${props.flat ? "" : "rounded-md"}
    `}
    >
      {props.buttons.map((button) => (
        <Button
          flat
          text={button.text}
          link={button.link}
          size={props.size}
          disabled={button.disabled}
          outline={button.outline || props.outline}
          classList={button.classList || []}
          func={button.func}
          key={button.link + button.text}
        />
      ))}
    </div>
  );
}

export default ButtonGroup;
