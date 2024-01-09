import { CButton, IButton_ } from "@/components/atom";

export interface IButton_Button extends IButton_ {
    type?: 'button'
}

export const CButton_Button = ({children, type, ...others}: IButton_Button) =>
<CButton type={(!!type) ? type : 'button'} {...others}> {children} </CButton>