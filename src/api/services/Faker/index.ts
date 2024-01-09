import { generateFakerRequest } from "@/api/axios";

export async function generateFakerService() {
    try {
        await generateFakerRequest();
        alert("DATOS GENERADOS!!!");
        return true;
    } catch (error) {
        alert("ERROR!!!");
        return false;
    }
}