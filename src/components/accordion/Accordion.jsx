import { useState } from "react";

/**
 * Props:
 *    data([{
 *        title (string)
 *        body (JSX Element)
 *    }])
 *    multiple (bool)
 */

function Accordion(props) {
  const [open, setOpen] = useState(props.multiple ? [] : -1);

  return (
    <div className="accordion">
      {props?.data.map((item, index) => (
        <div
          className="accordion-item mb-2 border border-primary/20 rounded"
          key={item.title + " " + item.index}
        >
          <div
            className="accordion-title relative w-full py-2 md:py-3 bg-primary pl-2 md:pl-4 rounded cursor-pointer"
            onClick={() => {
              if (props.multiple) {
                if (open.includes(index))
                  setOpen(() => open.filter((elem) => elem !== index));
                else setOpen(() => [...open, index]);
              } else {
                if (open === index) setOpen(-1);
                else setOpen(index);
              }
            }}
          >
            <div className="accordion-title-text relative mr-10 text-back font-bold">
              {item.title}
            </div>
            <div className="accordion-title-arrow absolute -translate-y-1/2 top-1/2 right-4">
              <i
                className={`fas fa-chevron-down duration-150 ease-linear text-back
                ${
                  (props.multiple && open.includes(index)) || open === index
                    ? "rotate-180"
                    : ""
                }`}
              ></i>
            </div>
          </div>

          <div
            style={{ transitionProperty: "max-height" }}
            className={`accordion-body duration-[350ms] ease-linear overflow-hidden
            ${
              (props.multiple && open.includes(index)) || open === index
                ? "max-h-[100vh]"
                : "max-h-0"
            }`}
          >
            <div className="accordion-body-text m-2">{item.body}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Accordion;
