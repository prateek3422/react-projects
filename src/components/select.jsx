import React, { useId } from "react";

const select = ({ options, lable, className = "", ...props }, ref) => {
  const id = useId();
  return (
    <div className="w-full">
      {lable && <lable htmlfor={id}></lable>}

      <select id={id} ref={ref} {...props}>
        {options?.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default React.forwardRef(select);
