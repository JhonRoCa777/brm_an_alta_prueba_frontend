import { insertUserRequest } from "@/api/axios";
import { SubjectModalOpenClose } from "@/event";
import { ICredencial, IUsuario } from "@/models";

export async function insertUserService(data: ICredencial & IUsuario) {
    try {
        await insertUserRequest(data);
        SubjectModalOpenClose.setSubject(false);
        alert("REGISTRADO!!!");
    } catch (error) {
        alert("ERROR");
        return false;
    }
}