import { CButton, IButton_ } from "@/components/atom";

export interface IButton_Submit extends IButton_ {
    type?: 'submit'
}

export const CButton_Submit = ({children, type, ...others}: IButton_Submit) =>
<CButton type={(!!type) ? type : 'submit'} {...others}> {children} </CButton>