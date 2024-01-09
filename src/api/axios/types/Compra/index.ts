import { BaseRequest } from "@/api/axios";
import { ICompra } from "@/models";
import { localstorageGetItem } from "@/utils";
import { AxiosResponse } from "axios";

export function compraCreateRequest(compras: ICompra[]): Promise<AxiosResponse<string>>{
    return BaseRequest.post('/compra', {compras: compras}, {
        headers: {
          'authorization': `Bearer ${localstorageGetItem()}` 
        }});
}