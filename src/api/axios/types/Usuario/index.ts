import { BaseRequest } from "@/api/axios";
import { ICredencial, IUsuario } from "@/models";

export function insertUserRequest(data: ICredencial & IUsuario) {
    return BaseRequest.post('/usuario', data);
}