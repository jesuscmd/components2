import React, { MouseEventHandler } from "react";
export type FormProps = {
    text?: string;
    primary?: boolean;
    disabled?: boolean;
    size?: "small" | "medium" | "large";
    onClick?: MouseEventHandler<HTMLButtonElement>;
};
declare const Button: React.FC<FormProps>;
export default Button;
//# sourceMappingURL=Form.d.ts.map