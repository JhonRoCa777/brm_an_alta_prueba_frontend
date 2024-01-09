export interface ICompra {
    id: string,
    factura: string,
    producto: string,
    nombre: string
    cantidad: number,
    precio: number
};

export const CompraIS: ICompra = {
    id: '',
    factura: '',
    producto: '',
    nombre: '',
    cantidad: 0,
    precio: 0
}