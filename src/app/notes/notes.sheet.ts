import { Component, OnInit } from "@angular/core";
import { INote } from "./note.interface";
import { NoteService } from "./note.service";

@Component({
    selector: 'notes-sheet',
    templateUrl: './note.sheet.html',
    styleUrls: ['./note.sheet.css']
})
export class NotesSheetComponent implements OnInit {
    notes!: INote[];
    constructor(private noteService : NoteService){}



    ngOnInit(){

        this.noteService.getNotes().subscribe(
            notes => {this.notes = notes;}
        );
    }
}