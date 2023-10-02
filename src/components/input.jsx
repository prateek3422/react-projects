import React, { useId } from "react";

const  Input = React.forwardRef(
  ({ leble, type = "text", className = "", ...props }, ref) => {
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

export default  Input;
