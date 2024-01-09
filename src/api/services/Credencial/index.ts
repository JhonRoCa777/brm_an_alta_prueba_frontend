import { loginUserRequest } from "@/api/axios";
import { ICredencial } from "@/models";
import { localstorageSetItem } from "@/utils";

export async function loginUserService(credencial: ICredencial) {
    try {
        const { data } = await loginUserRequest(credencial);
        localstorageSetItem(data);
        alert("BIENVENIDO!!!");
        return true;
    } catch (error) {
        alert("Credenciales Erróneas");
        return false;
    }
}