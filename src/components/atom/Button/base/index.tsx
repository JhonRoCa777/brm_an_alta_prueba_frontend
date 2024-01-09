import { PropsWithChildren } from "react";
import Button, { ButtonProps } from "react-bootstrap/Button";

export interface IButton extends PropsWithChildren<ButtonProps> {}

export function CButton({children, ...others}: IButton) {
    return (
        <Button {...others}> {children} </Button>
    );
}