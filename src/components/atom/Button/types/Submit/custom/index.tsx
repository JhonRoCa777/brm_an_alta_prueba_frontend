import { IButton_Submit, CButton_Submit } from "@/components/atom";

export interface CButton_Submit__ extends Omit<IButton_Submit , 'variant' | 'children'> {}

export const CButton_Submit__Login = (props: CButton_Submit__) =>
<CButton_Submit variant="success" {...props}> LOGIN </CButton_Submit>

export const CButton_Submit__Balance = (props: CButton_Submit__) =>
<CButton_Submit variant="success" {...props}> VER </CButton_Submit>

export const CButton_Submit__Create = (props: CButton_Submit__) =>
<CButton_Submit variant="success" {...props}> CREAR </CButton_Submit>

export const CButton_Submit__Send = (props: CButton_Submit__) =>
<CButton_Submit variant="success" {...props}> ENVIAR </CButton_Submit>