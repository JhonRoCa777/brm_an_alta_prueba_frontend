import { IButton_Button, CButton_Button } from "@/components/atom";

export interface CButton_Button__ extends Omit<IButton_Button , 'variant' | 'children'> {}

export const CButton_Submit__New = (props: CButton_Button__) =>
<CButton_Button style={{color: 'white', textShadow: '-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black', padding: '2px 4px'}}
variant="info" {...props}> ENVIAR DINERO </CButton_Button>

export const CButton_Submit__Register = (props: CButton_Button__) =>
<CButton_Button variant="warning" {...props}> REGISTRARSE </CButton_Button>

export const CButton_Submit__Logout = (props: CButton_Button__) =>
<CButton_Button variant="danger" {...props}> LOGOUT </CButton_Button>