export interface ICredencial {
    id: string,
    email: string,
    password: string,
    role: 'ADMIN' | 'CLIENT'
};

export const CredencialIS: ICredencial = {
    id: '',
    email: '',
    password: '',
    role: 'CLIENT'
}