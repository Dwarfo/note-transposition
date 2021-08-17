import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { NoteService } from "../note.service";

@Component({
    selector: 'full-notesheet',
    templateUrl: './notesheet.full.html',
    styleUrls: ['./noteSheetFull.css']
})
export class FullNotesheetComponent implements OnInit{
    constructor(private noteService : NoteService, private route:ActivatedRoute) {}
    noteLines!: any[];
    noteListArray: any[] = []
    oldChunk!: number;

    ngOnInit(){
        this.noteService.getNotesById(this.route.snapshot.params['id']).subscribe(
            allNotelist => {
                let allNotes = allNotelist;
                let notesLength = allNotes.length;

                console.log("Notes Length: " + notesLength);

                let chunk = 26;
                for (let i = 0; i < notesLength; i += chunk) {
                    let temporary = allNotes.slice(i, i + chunk);
                    this.noteListArray.push(temporary);
                }
            }
        );
    }

    //TODO
    //dynamically rerender lists of notes (changeable chunk value)
    //add transponisation (two buttons, and Eb and Bb)
}