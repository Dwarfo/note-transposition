import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { INote } from "../note.interface";
import { NoteService } from "../note.service";

@Component({
    selector: 'full-notesheet',
    templateUrl: './notesheet.full.html',
    styleUrls: ['./noteSheetFull.css']
})
export class FullNotesheetComponent implements OnInit{
    constructor(private noteService : NoteService, private route:ActivatedRoute) {}
    allNotes!: INote[];
    noteListArray: any[] = []
    oldChunk!: number;
    innerWidth!: number;

    ngOnInit(){
        this.innerWidth = window.innerWidth;
        this.noteService.getNotesById(this.route.snapshot.params['id']).subscribe(
            allNotelist => {
                this.allNotes = allNotelist;
                this.setNotes(allNotelist);
            }
        );
    }

    calculateChunk() : number{
        return Math.floor(this.innerWidth / 40) - 1;
    }

    transpBbToEb() {
        this.allNotes.forEach(note => {
            note.note = note.note - 4;
        });

        this.setNotes(this.allNotes);
    }

    setNotes(allNotelist : INote[]){
        let allNotes = allNotelist;
        let notesLength = allNotes.length;
        this.noteListArray = [];

        console.log("Notes Length: " + notesLength);

        let chunk = this.calculateChunk();
        this.noteListArray.push(allNotes.slice(0, chunk - 4));
        for (let i = chunk - 4; i < notesLength; i += chunk) {
            let temporary = allNotes.slice(i, i + chunk);
            this.noteListArray.push(temporary);
        }
    }
    //TODO
    //dynamically rerender lists of notes (changeable chunk value)
    //add transponisation (two buttons, and Eb and Bb)
}