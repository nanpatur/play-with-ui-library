import React from "react";
/**
 * Primary UI component for user interaction
 */
interface ButtonProps {
    primary?: boolean;
    size?: "small" | "medium" | "large";
    label: string;
}
export declare const Button: React.FC<ButtonProps>;
export {};
