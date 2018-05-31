import { Component, OnInit, ViewChild } from '@angular/core';
import { Notes } from '~/notes/models/notes';
import { RouterExtensions } from 'nativescript-angular';
import { NotesService } from '~/notes/services/notes.service';
import { RadSideDrawer } from 'nativescript-ui-sidedrawer';
import { RadListViewComponent } from 'nativescript-ui-listview/angular';
import { RadSideDrawerComponent } from 'nativescript-ui-sidedrawer/angular';
import { DateForm } from '~/notes/models/note-date-form';
import { Switch } from "ui/switch";
import * as moment from 'moment';
import { ActivatedRoute } from '@angular/router';


@Component({
  moduleId: module.id,
  selector: 'app-open-note',
  templateUrl: './open-note.component.html',
  styleUrls: ['./open-note.component.css']
})
export class OpenNoteComponent implements OnInit {

  private _note: Notes;
  private _noteDateForm: DateForm;
  private drawer: RadSideDrawer;
  public showDrawer: boolean;
  public eventHandler: boolean = true;
  @ViewChild(RadSideDrawerComponent) public drawerComponent: RadSideDrawerComponent;
  constructor(private _routerExtensions: RouterExtensions,
    private _notesService: NotesService) {
    this._note = new Notes();
    this._noteDateForm = new DateForm();
  }

  ngOnInit() {
    this._note = this._notesService.getNoteData();
    this._noteDateForm.day = this._note.date;
    this._noteDateForm.time = this._note.date;
  }

  ngAfterViewInit() {
    this.drawer = this.drawerComponent.sideDrawer;
  }

  public drawerToggle() {
    this.eventHandler ? this.drawer.showDrawer() : this.drawer.closeDrawer();
  }

  public onDrawerOpened() {
    this.onDrawerToggle();
    this.showDrawer = true;
  }

  public onDrawerClosed() {
    this.onDrawerToggle();
    this.showDrawer = false;
  }

  private onDrawerToggle() {
    this.eventHandler = !this.eventHandler;
  }

  public onSwitchChange(args) {
    let switchState = <Switch>args.object;
    this._note.hasDateChecked = switchState.checked;
  }

  public goBack() {
    this._routerExtensions.navigate(['/notes'], {
      transition: {
        name: "slideBottom",
        duration: 100
      }
    });

    let noteReminderDate = moment(this._noteDateForm.day);
    let noteReminderTime = moment(this._noteDateForm.time);
    noteReminderDate.hour(noteReminderTime.hour()).minutes(noteReminderTime.minutes());
    this._note.date = new Date(noteReminderDate.format());
    this._notesService.editNote(this._note);

  }


}
