import { LOCALSTORAGE_KEY } from "@/config";

export function localstorageSetItem($value: string, $key: string = LOCALSTORAGE_KEY){
    localStorage.setItem($key, $value);
}

export function localstorageGetItem($key: string = LOCALSTORAGE_KEY){
    return localStorage.getItem($key);
}

export function localstorageRemoveItem($key: string = LOCALSTORAGE_KEY){
    localStorage.removeItem($key);
}