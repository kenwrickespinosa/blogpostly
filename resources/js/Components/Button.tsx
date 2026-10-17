import type { ReactNode } from "react";

type ButtonProps = {
    children: ReactNode;
    type: "button" | "submit" | "reset";
    onClick?: () => void;
    disabled?: boolean;
    className?: string;
};

function Button({ children, type, onClick, disabled, className }: ButtonProps) {
    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={`${className} rounded-lg cursor-pointer py-3`}
        >
            {children}
        </button>
    );
}

export default Button;
