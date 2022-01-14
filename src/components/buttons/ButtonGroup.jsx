import Button from "./Button";

function ButtonGroup(props) {
  return (
    <div
      className={`
      countainer
      overflow-hidden
      w-fit
      ${props.flat ? "" : "rounded"}
    `}
    >
      {props.buttons.map((button) => (
        <Button
          flat
          text={button.text}
          link={button.link}
          small={props.small}
          disabled={button.disabled}
          outline={button.outline || props.outline}
          key={button.link + button.text}
          classList={button.classList || []}
        />
      ))}
    </div>
  );
}

export default ButtonGroup;
