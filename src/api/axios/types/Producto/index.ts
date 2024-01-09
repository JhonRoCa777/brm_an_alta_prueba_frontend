import { BaseRequest } from "@/api/axios";
import { IProducto } from "@/models";
import { AxiosResponse } from "axios";

export function indexProductoRequest(): Promise<AxiosResponse<IProducto[]>>{
    return BaseRequest.get('/producto');
}