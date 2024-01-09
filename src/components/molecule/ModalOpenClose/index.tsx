import { CModal, CModalHeader } from "@/components/atom";
import { SubjectModalOpenClose } from "@/event";
import { PropsWithChildren, useEffect, useState } from "react";

export function CModalOpenClose({
    children, 
}: PropsWithChildren) {

    const [state, setState] = useState(false);
    const subscription$ = SubjectModalOpenClose.getSubject();

    useEffect(() => {
        subscription$.subscribe((stateEvent) => setState(stateEvent));
    }, []);

    return (
        <CModal state={state}>

            <CModalHeader onClick={() => setState(false)}/>
            { children }

        </CModal>
    );
}