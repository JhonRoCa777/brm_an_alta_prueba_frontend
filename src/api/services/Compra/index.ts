import { compraCreateRequest } from "@/api/axios";
import { ICompra } from "@/models";

export async function compraCreateService(compras: ICompra[]) {
    try {
        const { data } = await compraCreateRequest(compras);
        document.location.href = `/Factura/${data}`;
    } catch (error) {
        alert("ERROR!!!");
    }
}