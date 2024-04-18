import { ReactNode } from 'react';
import './Button.css';

interface ButtonProps {
  color: string;
  children: ReactNode;
  icon?: ReactNode;
}

function Button({ color, children, icon }: ButtonProps) {
  return (
    <button type="button" className={`action-button ${color}`}>
      {/* {children} */}
      <span className="button-text">{children}</span>
      {icon && <span className="icon">{icon}</span>}
    </button>
  );
}

export default Button;
