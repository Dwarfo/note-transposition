import { Injectable } from "@angular/core";
import { Resolve } from "@angular/router";
import { INote } from "./note.interface";
import { NoteService } from "./note.service";
import { map } from "rxjs/operators";

@Injectable()
export class NotesResolver implements Resolve<INote[]>{
    constructor(private noteService : NoteService){}

    resolve(){
        return this.noteService.getNotes().pipe(map(events => events));
    }
}