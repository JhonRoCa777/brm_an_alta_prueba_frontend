import { PropsWithChildren } from "react";

export function CH4({children}: PropsWithChildren) {
    return (
        <h4 style={{color: 'black', marginBottom: '0'}}> {children} </h4>
    );
}