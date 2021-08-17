import { Component, Input, OnInit } from "@angular/core";
import { CommonModule } from '@angular/common';

@Component({
    selector: 'note-symbol',
    template: `
        <span class="note_symbol" style="bottom : {{offset}}px" >&#9833;
            <span *ngIf="note < 4" class="additional_line" [ngStyle]="{'bottom': note%2 === 0 ? '33px' : '21px'}"></span>
        </span>
    `,
    styles: [
        '.note_symbol{font-size: 90px; position: relative; display: inline-grid; width: 40px}',
        '.additional_line{border-bottom: 2px solid black; width: 80%; position:relative}']
})
export class NoteSymbolComponent implements OnInit{
    @Input("note") note: number = 0;
    @Input() duration: number = 1;
    //@Input() note: number;
    offset!: number;
    ngOnInit(){
        this.offset = 3 + (this.note - 6) * 12;
    }
}