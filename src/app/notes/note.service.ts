import { Injectable } from "@angular/core";
import { INote } from "./note.interface";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from "rxjs";
import { INoteList } from "./notelist.interface";
import { INoteListEntry } from "./noteList/notelist-entry.interface";

@Injectable()
export class NoteService{
    notesUrl : string = 'api/getNotes';
    constructor(
        private http: HttpClient) { }

    getNotesById(id:number) : Observable<INote[]> {
        let subj = new Subject<INote[]>();
        setTimeout(() => {subj.next(notes[id].notes); subj.complete();}, 0);

        return subj;
        //return this.http.get<INote[]>(this.notesUrl)
    }

    getNotesNum() : Observable<number>{
        let subj = new Subject<number>();
        setTimeout(() => {subj.next(2); subj.complete();}, 0);

        return subj;
        //return this.http.get<number>(this.notesNumUrl)
    }

    getListEntries() : Observable<INoteListEntry[]>{
        let subj = new Subject<INoteListEntry[]>();
        setTimeout(() => {
            let entries : INoteListEntry[] = [];
            
            notes.forEach(element => {
                let entry : INoteListEntry = 
                {
                    id: element.id,
                    name: element.name
                }

                entries.push(entry);
            });
        
            subj.next(entries);
            subj.complete();
        }, 0);

        return subj;
    }
}

const notes : INoteList[] = [
    {
        id:0,
        name: 'longy',
        notes: [
            {
                note: 5,
                order: 0
            },
            {
                note: 8,
                order: 1
            },
            {
                note: 0,
                order: 2
            },
            {
                note: 3,
                order: 2
            },
            {
                note: 0,
                order: 2
            },
            {
                note: 8,
                order: 2
            },
            {
                note: 3,
                order: 2
            },
            {
                note: 0,
                order: 2
            },
            {
                note: 2,
                order: 2
            },
            {
                note: 3,
                order: 2
            },
            {
                note: 0,
                order: 2
            },
            {
                note: 1,
                order: 2
            },
            {
                note: 5,
                order: 0
            },
            {
                note: 8,
                order: 1
            },
            {
                note: 0,
                order: 2
            },
            {
                note: 3,
                order: 2
            },
            {
                note: 0,
                order: 2
            },
            {
                note: 8,
                order: 2
            },
            {
                note: 3,
                order: 2
            },
            {
                note: 0,
                order: 2
            },
            {
                note: 2,
                order: 2
            },
            {
                note: 3,
                order: 2
            },
            {
                note: 0,
                order: 2
            },
            {
                note: 1,
                order: 2
            },
            {
                note: 5,
                order: 0
            },
            {
                note: 8,
                order: 1
            },
            {
                note: 0,
                order: 2
            },
            {
                note: 3,
                order: 2
            },
            {
                note: 0,
                order: 2
            },
            {
                note: 8,
                order: 2
            },
            {
                note: 3,
                order: 2
            },
            {
                note: 0,
                order: 2
            },
            {
                note: 2,
                order: 2
            },
            {
                note: 3,
                order: 2
            },
            {
                note: 0,
                order: 2
            },
            {
                note: 1,
                order: 2
            },
            {
                note: 5,
                order: 0
            },
            {
                note: 8,
                order: 1
            },
            {
                note: 0,
                order: 2
            },
            {
                note: 3,
                order: 2
            },
            {
                note: 0,
                order: 2
            },
            {
                note: 8,
                order: 2
            },
            {
                note: 3,
                order: 2
            },
            {
                note: 0,
                order: 2
            },
            {
                note: 2,
                order: 2
            },
            {
                note: 3,
                order: 2
            },
            {
                note: 0,
                order: 2
            },
            {
                note: 1,
                order: 2
            },
            {
                note: 5,
                order: 0
            },
            {
                note: 8,
                order: 1
            },
            {
                note: 0,
                order: 2
            },
            {
                note: 3,
                order: 2
            },
            {
                note: 0,
                order: 2
            },
            {
                note: 8,
                order: 2
            },
            {
                note: 3,
                order: 2
            },
            {
                note: 0,
                order: 2
            },
            {
                note: 2,
                order: 2
            },
            {
                note: 3,
                order: 2
            },
            {
                note: 0,
                order: 2
            },
            {
                note: 1,
                order: 2
            },
            {
                note: 5,
                order: 0
            },
            {
                note: 8,
                order: 1
            },
            {
                note: 0,
                order: 2
            },
            {
                note: 3,
                order: 2
            },
            {
                note: 0,
                order: 2
            },
            {
                note: 8,
                order: 2
            },
            {
                note: 3,
                order: 2
            },
            {
                note: 0,
                order: 2
            },
            {
                note: 2,
                order: 2
            },
            {
                note: 3,
                order: 2
            },
            {
                note: 0,
                order: 2
            },
            {
                note: 1,
                order: 2
            }
        ]
    },
    {
        id:1,
        name: 'shorty',
        notes: [
            {
                note: 5,
                order: 0
            },
            {
                note: 8,
                order: 1
            },
            {
                note: 0,
                order: 2
            },
            {
                note: 3,
                order: 2
            },
            {
                note: 0,
                order: 2
            },
            {
                note: 8,
                order: 2
            }
        ]
    },
    {
        id:2,
        name: '3sept',
        notes: [
            {
                note: 7,
                order: 0
            },
            {
                note: 6,
                order: 1
            },
            {
                note: 4,
                order: 2
            },
            {
                note: 5,
                order: 2
            },
            {
                note: 7,
                order: 0
            },
            {
                note: 6,
                order: 1
            },
            {
                note: 4,
                order: 2
            },
            {
                note: 5,
                order: 2
            }
        ]
    }
];