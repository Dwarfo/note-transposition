import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NoteService } from './notes/note.service';
import { NotesSheetComponent } from './notes/notes.sheet';

@NgModule({
  declarations: [
    AppComponent,
    NotesSheetComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [HttpClient, NoteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
