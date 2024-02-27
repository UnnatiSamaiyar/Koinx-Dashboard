import React from "react";
import PropTypes from "prop-types";

const shapes = {
  circle: "rounded-[50%]",
  round: "rounded-lg",
};
const variants = {
  gradient: {
    blue_A400_indigo_A700: "bg-gradient text-white-A700",
  },
  fill: {
    blue_gray_400_02: "bg-blue_gray-400_02 text-white-A700",
    indigo_400: "bg-indigo-400",
    white_A700: "bg-white-A700 text-gray-900",
    blue_gray_50_02: "bg-blue_gray-50_02 text-teal-500_01",
  },
};
const sizes = {
  xl: "h-12 px-6 text-base",
  xs: "h-6 px-1",
  lg: "h-10 px-6 text-base",
  md: "h-8 px-3.5 text-sm",
  sm: "h-7 px-2.5 text-base",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "round",
  variant = "fill",
  size = "sm",
  color = "blue_gray_50_02",
  ...restProps
}) => {
  return (
    <button
      className={`${className} flex items-center justify-center text-center cursor-pointer ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  shape: PropTypes.oneOf(["circle", "round"]),
  size: PropTypes.oneOf(["xl", "xs", "lg", "md", "sm"]),
  variant: PropTypes.oneOf(["gradient", "fill"]),
  color: PropTypes.oneOf(["blue_A400_indigo_A700", "blue_gray_400_02", "indigo_400", "white_A700", "blue_gray_50_02"]),
};

export { Button };
