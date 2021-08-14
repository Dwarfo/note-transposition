import { Injectable } from "@angular/core";
import { INote } from "./note.interface";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from "rxjs";

@Injectable()
export class NoteService{
    notesUrl : string = 'api/getNotes';
    constructor(
        private http: HttpClient) { }

    getNotes() : Observable<INote[]> {
        let subj = new Subject<INote[]>();
        setTimeout(() => {subj.next(notes); subj.complete();}, 0);

        return subj;
        //return this.http.get<INote[]>(this.notesUrl)
    }
}

const notes : INote[] = [
    {
        note: 5,
        order: 0
    },
    {
        note: 8,
        order: 1
    },
    {
        note: 10,
        order: 2
    }
];