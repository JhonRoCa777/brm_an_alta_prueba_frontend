import { PropsWithChildren } from "react";
import Modal, { ModalProps } from "react-bootstrap/Modal";

export interface IModal extends ModalProps {}

export function CModal({
    children,
    state
}: PropsWithChildren<IModal>) {

    return (
        <Modal
            show={state}
            size="lg"
            backdrop="static"
            keyboard={false}
        >
            {children}
        </Modal>
    );
}