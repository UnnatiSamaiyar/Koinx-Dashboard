import React from "react";

const sizes = {
  xl: "text-[28px] font-semibold leading-[34px]",
  s: "text-lg font-semibold leading-[22px]",
  md: "text-xl font-bold leading-[140%]",
  xs: "text-base font-semibold",
  lg: "text-2xl font-semibold leading-[30px]",
};

const Heading = ({ children, className = "", size = "lg", as, ...restProps }) => {
  const Component = as || "h6";

  return (
    <Component className={`text-gray-900 font-inter ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
