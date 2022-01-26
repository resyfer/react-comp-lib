function OptionsInput(props) {
  return (
    <div className="radio">
      {props.options.map((option, index) => (
        <div className="input-cntr" key={option.name + " " + index}>
          <input
            type="checkbox"
            name={option.name}
            id={option.name}
            value={option.value}
            checked={
              props.multiple
                ? props.value.includes(index)
                : props.value == index
            }
            onChange={(e) => {
              if (e.target.checked) {
                if (props.multiple)
                  props.setValue(() => [...props.value, index]);
                else props.setValue(index);
              } else {
                if (props.multiple)
                  props.setValue(() =>
                    props.value.filter((elem) => elem != index)
                  );
                else props.setValue(-1);
              }
            }}
          />
          <span>{option.name}</span>
        </div>
      ))}
    </div>
  );
}

export default OptionsInput;
