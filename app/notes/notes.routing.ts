import { NgModule, Component } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { NotesComponent } from '~/notes/notes.component';
import { NewNoteComponent } from '~/notes/new-note/new-note.component';
import { OpenNoteComponent } from '~/notes/open-note/open-note.component';
import { CalendarComponent } from '~/notes/calendar/calendar.component';

const routes: Routes = [
    {
        path: '',
        component: NotesComponent
    },
    {
        path: 'new-note',
        component: NewNoteComponent
    },
    {
        path: 'open-note',
        component: OpenNoteComponent
    },
    {
        path: 'calendar',
        component: CalendarComponent
    }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class NotesRoutingModule { }