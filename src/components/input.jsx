import React, { useId } from "react";

const input = React.forwardRef(
  ({ leble, type = "text", className = "", ...props }) => {
    const id = useId();
    return (
      <div className="w-full">
        {leble && <label htmlFor={id}>{label}</label>}

        <input type={type}
        id={id}
        className={`${className}`}
        ref={ref}
        {...props}
        />
      </div>
    );
  }
);

export default input;
