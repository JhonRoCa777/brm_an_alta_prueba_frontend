import { insertUserService } from "@/api/services";
import { CButton_Submit__Create, CForm, CRow } from "@/components/atom";
import { ICredencial, IUsuario, CredencialIS, UsuarioIS } from "@/models";
import { Col, FloatingLabel, Form, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";

export function FormSubmitInsert() {

    const {register, handleSubmit, formState: {errors}} = useForm<ICredencial & IUsuario>({
        defaultValues: {...CredencialIS, ...UsuarioIS}
    });

    const onSubmit = async (data: ICredencial & IUsuario) => insertUserService(data);
    
    return (
        <CForm onSubmit={handleSubmit(onSubmit)}>
            <Row>
                <Col sm="12" md="12" lg="6">
                    <Form.Floating className="mb-3">
                        <Form.Control
                        id="NamesFormLabel"
                        type="text"
                        placeholder=""
                        {...register("nombres", {
                            required: "Campo Requerido",
                            maxLength: {
                                value: 50,
                                message: "Máximo 50 números"
                            }
                        })}
                        isInvalid={!!errors["nombres"]}
                        title={`${errors["nombres"]?.message}`}
                        />
                        <label htmlFor="NamesFormLabel"> Nombres </label>
                    </Form.Floating>
                </Col>

                <Col sm="12" md="12" lg="6">
                    <Form.Floating className="mb-3">
                        <Form.Control
                        id="LastNamesFormLabel"
                        type="text"
                        placeholder=""
                        {...register("apellidos", {
                            required: "Campo Requerido",
                            maxLength: {
                                value: 50,
                                message: "Máximo 50 números"
                            }
                        })}
                        isInvalid={!!errors["apellidos"]}
                        title={`${errors["apellidos"]?.message}`}
                        />
                        <label htmlFor="LastNamesFormLabel"> Apellidos </label>
                    </Form.Floating>
                </Col>
            </Row>

            <Row>
                <Col sm="12" md="6" lg="6">
                    <FloatingLabel controlId="floatingSelect" label="Tipo de Documento">
                        <Form.Select aria-label="Floating label select example"
                            {...register("tipo_documento", {
                                required: "Campo Requerido"
                            })}
                            isInvalid={!!errors["tipo_documento"]}
                            title={`${errors["tipo_documento"]?.message}`}>
                            <option value=''> Seleccione... </option>
                            <option value="CÉDULA DE CIUDADANÍA"> CÉDULA DE CIUDADANÍA </option>
                            <option value="CÉDULA DE EXTRANJERÍA"> CÉDULA DE EXTRANJERÍA </option>
                            <option value="PASAPORTE"> PASAPORTE </option>
                            <option value="REGISTRO CIVIL"> REGISTRO CIVIL </option>
                        </Form.Select>
                    </FloatingLabel>
                </Col>
                <Col sm="12" md="6" lg="6">
                    <Form.Floating className="mb-3">
                        <Form.Control
                        id="DocumentFormLabel"
                        type="text"
                        placeholder=""
                        {...register("documento", {
                            required: "Campo Requerido",
                            minLength: {
                                value: 8,
                                message: "Mínimo 8 números"
                            },
                            maxLength: {
                                value: 15,
                                message: "Máximo 15 números"
                            }
                        })}
                        isInvalid={!!errors["documento"]}
                        title={`${errors["documento"]?.message}`}
                        />
                        <label htmlFor="DocumentFormLabel"> Documento </label>
                    </Form.Floating>
                </Col>
            </Row>

            <Row>
                <Col sm="12" md="12" lg="12">
                    <Form.Floating className="mb-3">
                        <Form.Control
                        id="EmailFormLabel"
                        type="email"
                        placeholder=""
                        {...register("email", {
                            required: "Campo Requerido"
                        })}
                        isInvalid={!!errors["email"]}
                        title={`${errors["email"]?.message}`}
                        />
                        <label htmlFor="EmailFormLabel"> Email </label>
                    </Form.Floating>
                </Col>
            </Row>

            <Row>
                <Col sm="12" md="12" lg="12">
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
                <CButton_Submit__Create/>
            </CRow>
        </CForm>
    );
}