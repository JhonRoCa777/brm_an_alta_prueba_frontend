import { generateFakerService, loginUserService } from "@/api/services";
import { CButton_Submit__Login, CButton_Submit__Register, CForm, CModalBody, CRow } from "@/components/atom";
import { CModalOpenClose } from "@/components/molecule";
import { FormSubmitInsert } from "@/components/organism";
import { SubjectModalOpenClose } from "@/event";
import { ICredencial, CredencialIS } from "@/models";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export function FormSubmitLogin() {

    const navigate = useNavigate();

    const {register, handleSubmit, formState: {errors}} = useForm<ICredencial>({
        defaultValues: CredencialIS
    });

    const onSubmit = async (data: ICredencial) => {
        let response = await loginUserService(data);
        (!!response) && navigate(`/Dashboard`);
    }
    
    return (
        <>
            <CModalOpenClose>
                <CModalBody>
                    <FormSubmitInsert/>
                </CModalBody>
            </CModalOpenClose>

            <CForm onSubmit={handleSubmit(onSubmit)}>
                <Row>
                    <Col sm="12" md="6" lg="6">
                        <Form.Floating className="mb-3">
                            <Form.Control
                            id="floatingInputCustom"
                            type="email"
                            placeholder=""
                            {...register("email", {
                                required: "Campo Requerido"
                            })}
                            isInvalid={!!errors["email"]}
                            title={`${errors["email"]?.message}`}
                            />
                            <label htmlFor="floatingInputCustom"> Email </label>
                        </Form.Floating>
                    </Col>
                    <Col sm="12" md="6" lg="6">
                        <Form.Floating className="mb-3">
                            <Form.Control
                            id="PasswordFormLabel"
                            type="password"
                            placeholder=""
                            {...register("password", {
                                required: "Campo Requerido",
                                minLength: {
                                    value: 8,
                                    message: "Mínimo 8 números"
                                }
                            })}
                            isInvalid={!!errors["password"]}
                            title={`${errors["password"]?.message}`}
                            />
                            <label htmlFor="PasswordFormLabel"> Contraseña </label>
                        </Form.Floating>
                    </Col>
                </Row>
                    
                <CRow>
                    <div style={{marginTop: "17px"}}></div>
                    <CButton_Submit__Login/>
                    <CButton_Submit__Register onClick={()=>{
                        SubjectModalOpenClose.setSubject(true);
                    }}/>
                    <br />
                    <Button onClick={async ()=>{
                        await generateFakerService();
                    }}> CREAR DATOS DE PRUEBA </Button>
                </CRow>
            </CForm>
        </>
    );
}