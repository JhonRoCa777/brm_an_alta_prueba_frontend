import ModalHeader, { ModalHeaderProps } from "react-bootstrap/ModalHeader";

export interface IModalHeader extends ModalHeaderProps {}

export function CModalHeader({
    onClick
}: IModalHeader) {
    return (
        <ModalHeader onClick={onClick} closeButton>
            {/* <Modal.Title>Modal title</Modal.Title> */}
        </ModalHeader>
    );
}