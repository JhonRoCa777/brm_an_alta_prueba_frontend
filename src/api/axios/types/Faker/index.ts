import { BaseRequest } from "@/api/axios";

export function generateFakerRequest(){
    return BaseRequest.get('/faker');
}