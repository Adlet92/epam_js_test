import { ReactNode } from 'react';
import './Button.css';

interface ButtonProps {
  color: string;
  children: ReactNode;
}

function Button({ color, children }: ButtonProps) {
  return (
    <button type="button" className={`action-button ${color}`}>
      {children}
    </button>
  );
}

export default Button;
