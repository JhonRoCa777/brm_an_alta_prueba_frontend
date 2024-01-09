import { BaseRequest } from "@/api/axios";
import { ICompra, IUsuario } from "@/models";
import { AxiosResponse } from "axios";

export function readFacturaRequest(id: string): Promise<AxiosResponse<{usuario: IUsuario, compras: ICompra[]}>>{
    return BaseRequest.get(`/factura/${id}`);
}