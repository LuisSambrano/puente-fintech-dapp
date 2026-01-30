import type { ButtonHTMLAttributes } from "react";

const CustomButton = ({
  children,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>): JSX.Element => {
  return (
    <button
      {...props}
      className="w-full py-2 flex items-center justify-center bg-[#c5dbd3] md:mt-10 lg:mt-14 mt-6 rounded-md text-black"
    >
      {children}
    </button>
  );
};

export default CustomButton;
