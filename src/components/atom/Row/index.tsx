import Row from 'react-bootstrap/Row';
import style from "./style.module.css";
import { PropsWithChildren } from 'react';

export const SRow: {
    index: string
} = style as any;

export interface IRow extends PropsWithChildren {}

export function CRow(props: IRow) {
    return (
        <Row className={SRow.index} {...props}/>
    );
}