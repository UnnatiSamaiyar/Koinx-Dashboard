import React from "react";

const sizes = {
  xs: "text-[11px] font-normal",
  lg: "text-sm font-medium leading-5",
  s: "text-xs font-medium",
  "2xl": "text-base font-medium leading-5",
  "3xl": "text-4xl font-medium",
  xl: "text-[15px] font-medium leading-[19px]",
  md: "text-[13px] font-medium",
};

const Text = ({ children, className = "", as, size = "2xl", ...restProps }) => {
  const Component = as || "p";

  return (
    <Component className={`text-gray-900_02 font-inter ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };
