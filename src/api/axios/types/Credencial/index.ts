import { BaseRequest } from "@/api/axios";
import { ICredencial } from "@/models";
import { AxiosResponse } from "axios";

export function loginUserRequest(credencial: ICredencial): Promise<AxiosResponse<string>>{
    return BaseRequest.post('/credencial/login', credencial);
}