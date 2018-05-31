import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptModule } from 'nativescript-angular/nativescript.module';
import { NativeScriptFormsModule } from 'nativescript-angular/forms';
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NotesComponent } from '~/notes/notes.component';
import { NotesRoutingModule } from '~/notes/notes.routing';
import { NativeScriptUIListViewModule } from "nativescript-ui-listview/angular";
import { NgShadowModule } from 'nativescript-ng-shadow';
import { NotesService } from '~/notes/services/notes.service';
import { NewNoteComponent } from '~/notes/new-note/new-note.component';
import { NativeScriptUISideDrawerModule } from "nativescript-ui-sidedrawer/angular";
import { NativeScriptUIDataFormModule } from "nativescript-ui-dataform/angular";
import { OpenNoteComponent } from '~/notes/open-note/open-note.component';
import { CalendarComponent } from '~/notes/calendar/calendar.component';
import { NativeScriptUICalendarModule } from "nativescript-ui-calendar/angular";
import { CalendarEventsService } from '~/notes/services/calendar-event.service';

@NgModule({
    providers: [
        NotesService,
        CalendarEventsService
    ],
    imports: [
        NativeScriptFormsModule,
        NativeScriptUIListViewModule,
        NativeScriptUISideDrawerModule,
        NativeScriptUICalendarModule,
        NativeScriptUIDataFormModule,
        NotesRoutingModule,
        NativeScriptCommonModule,
        NgShadowModule
    ],
    declarations: [
        NotesComponent,
        NewNoteComponent,
        OpenNoteComponent,
        CalendarComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class NotesModule { }