import { useState } from "react";

/**
 * Props:
 *    data ([{
 *        title (string)
 *        body (JSX Element)
 *    }])
 */

function Tabs(props) {
  const [open, setOpen] = useState(0);

  return (
    <div className="tabs-cont w-full">
      <div className="tab-titles-cont">
        <div className="tab-titles flex flex-row flex-wrap">
          {props?.data.map((tab, index) => (
            <div
              className={`tab-title duration-150 ease-linear cursor-pointer mr-1 text-back py-2 px-3 rounded ${
                open === index ? "bg-primary" : "bg-secondary"
              }`}
              key={tab.title}
              onClick={() => setOpen(index)}
            >
              {tab.title}
            </div>
          ))}
        </div>
      </div>
      <div className="tab-content py-2 pt-6 px-2">
        {open !== -1 && props?.data[open].body}
      </div>
    </div>
  );
}

export default Tabs;
