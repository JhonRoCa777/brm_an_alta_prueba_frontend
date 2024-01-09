import { indexProductoRequest } from "@/api/axios";

export async function indexProductoService() {
    try {
        const {data} = await indexProductoRequest();
        return data;
    } catch (error) {
        alert("ERROR!!!");
        return false;
    }
}