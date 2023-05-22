import clsx from 'clsx';
import { ChangeEvent, FC } from 'react';

interface InputProps {
  className: string;
  required: boolean;
  placeholder: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  type?: 'text' | 'password' | 'email' | 'number';
}

const Input: FC<InputProps> = ({ className, type = 'text', ...props }) => {
  return (
    <input
      type={type}
      className={clsx(
        'border-solid border-gray border-2 px-6 py-2 text-lg rounded-3xl w-full',
        className
      )}
      {...props}
    />
  );
};

export default Input;
