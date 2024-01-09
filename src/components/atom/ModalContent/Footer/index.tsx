import ModalFooter from "react-bootstrap/ModalFooter";
import { PropsWithChildren } from "react";

export interface IModalFooter extends PropsWithChildren {}

export function CModalFooter({
    children
}: IModalFooter) {
    return (
        <ModalFooter>
            {children}
        </ModalFooter>
    );
}