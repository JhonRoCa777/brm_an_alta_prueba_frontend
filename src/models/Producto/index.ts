export interface IProducto {
    id: string,
    numero_lote: string,
    nombre: string,
    cantidad: number,
    precio: number,
    created_at: string
};

export const ProductoIS: IProducto = {
    id: '',
    numero_lote: '',
    nombre: '',
    cantidad: 0,
    precio: 0,
    created_at: ''
}