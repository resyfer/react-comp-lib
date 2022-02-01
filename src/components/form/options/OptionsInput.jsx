import "./OptionsInput.scss";

function OptionsInput(props) {
  return (
    <div className="radio">
      {props.options.map((option, index) => (
        <div
          className="input-cntr my-1 flex flex-row justify-start align-middle"
          key={option.name + " " + index}
        >
          <input
            type="checkbox"
            name={option.name}
            id={option.name}
            value={option.value}
            checked={
              props.multiple
                ? props.value.includes(index)
                : props.value === index
            }
            className="checkbox h-5 w-5 bg-primary"
            onChange={(e) => {
              if (e.target.checked) {
                if (props.multiple)
                  props.setValue(() => [...props.value, index]);
                else props.setValue(index);
              } else {
                if (props.multiple)
                  props.setValue(() =>
                    props.value.filter((elem) => elem !== index)
                  );
                else props.setValue(-1);
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
