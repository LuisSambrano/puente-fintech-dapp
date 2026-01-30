import type { InputHTMLAttributes } from 'react'

type CustomHTMLInputElementProps = {
    error: string;
} & InputHTMLAttributes<HTMLInputElement>;


const CustomInput = ({
    id,
    name,
    error,
    value,
    className,
    ...props
  }: CustomHTMLInputElementProps) => {
    return (
      <div className="form-group mb-8">
        <input
          id={id}
          name={name}
          className={`w-full py-3 rounded-md flex items-center px-3 bg-[#EAF0F7] ${className}`}
          {...props}
        />
        {error &&  <div className="text-red-900 text-sm">{error}</div>}
      </div>
    );
  };
  
  export default CustomInput;
  