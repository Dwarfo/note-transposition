import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { NotesListComponent } from "./notes/noteList/notes.list";
import { FullNotesheetComponent } from "./notes/noteSheetFull/notesheet.full.component";
import { WelcomePageComponent } from "./structure/welcome.component";

const routes : Routes = [
    { path: 'welcome' , component: WelcomePageComponent},
    { path: 'noteLists', component: NotesListComponent},
    { path: 'noteSheet/:id', component: FullNotesheetComponent},
    { path: '', redirectTo: '/welcome', pathMatch: 'full' }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})
export class AppRouterModule{}