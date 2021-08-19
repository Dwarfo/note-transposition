import { Component, Input, OnInit } from "@angular/core";
import { CommonModule } from '@angular/common';

@Component({
    selector: 'note-symbol',
    template: `
        <span class="note_symbol" style="bottom : {{offset}}px" >&#9833;
        <span *ngFor="let noteLine of noteLines" class="additional_line" [style.bottom.px]="noteLine.height"></span>
        </span>
    `,
    styles: [
        '.note_symbol{font-size: 90px; position: relative; display: inline-grid; width: 40px}',
        '.additional_line{border-bottom: 2px solid black; width: 80%; position:relative}',
        '.note_a_low{bottom: 48px}',
        '.note_b_low{bottom: 74px}']
})
export class NoteSymbolComponent implements OnInit{
    @Input("note") note: number = 0;
    @Input() duration: number = 1;
    //@Input() note: number;
    offset!: number;
    noteLines: any[] = [];

    ngOnInit(){
        this.offset = 3 + (this.note - 6) * 12;
        if(this.note < 3){
            this.noteLines.push(this.note%2?{height:21}:{height:33});

            for(let i = this.note; i < 2; i++){
                if(i%2 != 0){
                    if(this.note%2 != 0)
                        this.noteLines.push({height:Math.abs(i)*26 + 21});
                    else{
                        this.noteLines.push({height:Math.abs(i)*26 + 33});
                    }
                }
            }
        }

        if(this.note > 13){
            this.noteLines.push(this.note%2?{height:21}:{height:33});

            for(let i = this.note; i > 15; i--){
                if(i%2 == 0){
                    if(this.note%2 != 0)
                        this.noteLines.push({height:-Math.abs(i - 15)*26 + 25});
                    else{
                        this.noteLines.push({height:-Math.abs(i - 15)*26 + 37});
                    }
                }
            }
        }
    }
}