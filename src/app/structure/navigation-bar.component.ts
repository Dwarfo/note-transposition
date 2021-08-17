import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { NoteService } from "../notes/note.service";


@Component({
    selector:'nav-bar',
    templateUrl: './navigation-bar.component.html',
    styleUrls: ['./navigation-bar.component.css']
})
export class NavBarComponent implements OnInit{
    numberOfNotelists!: number;
    constructor(private notesService : NoteService, private router: Router){}

    ngOnInit(){
        this.notesService.getNotesNum().subscribe( noteNum => {
            this.numberOfNotelists = noteNum;
        });
    }

    public get isOnSheet() : boolean {
        return (this.router.url.includes('/noteSheet/'));
    }

}