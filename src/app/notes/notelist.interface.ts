import { INote } from "./note.interface";

export interface INoteList {
    id: number;
    name?: string;
    tonality?: string;
    trans?:string;

    notes: INote[];
}