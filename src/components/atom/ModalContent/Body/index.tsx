import { PropsWithChildren } from "react";
import ModalBody from "react-bootstrap/ModalBody";

export function CModalBody({children}: PropsWithChildren) {
    return (
        <ModalBody style={{overflow: 'auto'}}>
            {children}
        </ModalBody>
    );
}

export function CModalBodyBlocked({children}: PropsWithChildren) {
    return (
        <ModalBody style={{overflow: 'auto', pointerEvents: 'none'}}>
            {children}
        </ModalBody>
    );
}