import { Component, OnInit } from "@angular/core";
import { NoteService } from "../note.service";
import { INoteListEntry } from "./notelist-entry.interface";

@Component({
    selector:'notes-list',
    templateUrl:'./notes.list.html',
    styleUrls: ['./notes.list.css']
})
export class NotesListComponent implements OnInit{
    notesListEntry!: INoteListEntry[];
    constructor(private noteService : NoteService){}

    ngOnInit(){
        this.noteService.getListEntries().subscribe( 
            entries => {
                this.notesListEntry = entries;
            }
        );
    }

    onResize(event:any) {
        event.target.innerWidth;
        console.log(innerWidth);
    }
}