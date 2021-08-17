import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';
import { AppRouterModule } from './app.routing';

import { AppComponent } from './app.component';
import { NoteService } from './notes/note.service';
import { NoteSymbolComponent } from './notes/note.symbol';
import { NotesSheetComponent } from './notes/noteSheet/notes.sheet';
import { FullNotesheetComponent } from './notes/noteSheetFull/notesheet.full.component';
import { NavBarComponent } from './structure/navigation-bar.component';
import { WelcomePageComponent } from './structure/welcome.component';
import { NotesListComponent } from './notes/noteList/notes.list';

@NgModule({
  declarations: [
    AppComponent,
    NotesSheetComponent,
    NoteSymbolComponent,
    FullNotesheetComponent,
    WelcomePageComponent,
    NavBarComponent,
    NotesListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRouterModule
  ],
  providers: [HttpClient, NoteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
