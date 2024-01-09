export interface IUsuario {
    id: string,
    credencial: string,
    nombres: string,
    apellidos: string,
    tipo_documento: '' | 'CÉDULA DE CIUDADANÍA' | 'CÉDULA DE EXTRANJERÍA' | 'PASAPORTE' | 'REGISTRO CIVIL',
    documento: string
};

export const UsuarioIS: IUsuario = {
    id: '',
    credencial: '',
    nombres: '',
    apellidos: '',
    tipo_documento: '',
    documento: ''
}