import type { ReactNode } from "react";

type ButtonProps = {
    children: ReactNode;
    type: "button" | "submit" | "reset";
    onClick?: () => void;
    className?: string;
};

function Button({ children, type, onClick, className }: ButtonProps) {
    return (
        <button
            type={type}
            onClick={onClick}
            className={`${className} rounded-lg cursor-pointer py-3`}
        >
            {children}
        </button>
    );
}

export default Button;
