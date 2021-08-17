import { Component, Input, OnInit } from "@angular/core";
import { INote } from "../note.interface";
import { NoteService } from "../note.service";

@Component({
    selector: 'notes-sheet',
    templateUrl: './note.sheet.html',
    styleUrls: ['./note.sheet.css']
})
export class NotesSheetComponent implements OnInit {
    @Input('Notes_in_line')notes!: INote[];
    @Input('IsFirstLine')isFirstLine: boolean = true;
    constructor(private noteService : NoteService){}

    ngOnInit(){

        //this.noteService.getNotes().subscribe(
        //    notes => {this.notes = notes;}
        //);
    }
}