import { readFacturaRequest } from "@/api/axios";

export async function readFacturaService(id: string) {
    try {
        const {data} = await readFacturaRequest(id);
        return data;
    } catch (error) {
        alert("ERROR!!!");
        return false;
    }
}