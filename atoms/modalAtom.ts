import { atom } from "recoil";
import { Completemovie } from "@/types";

export const modalState = atom({
    key: "modalState",
    default: false,
})

export const movieState = atom<Completemovie | null>({
    key: "movieState",
    default:null,
});