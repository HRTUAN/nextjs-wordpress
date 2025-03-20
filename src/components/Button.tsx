import Link from "next/link";
import React from "react";

interface ButtonProps {
    href: string;
    text: string;
    className?: string;
}

const Button: React.FC<ButtonProps> = ({ href, text, className = "" }) => {
    return (
        <Link href={href} className={`rounded-pill btn  btn-light shadow-secondary ${className}`}>
            {text}
        </Link>
    );
};

export default Button;
