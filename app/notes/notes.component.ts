import { Component, OnInit, ViewChild } from '@angular/core';
import { ObservableArray } from 'tns-core-modules/data/observable-array/observable-array';
import { Notes } from '~/notes/models/notes';
import { Elevation } from 'nativescript-ng-shadow';
import { RouterExtensions } from 'nativescript-angular';
import { transition } from '@angular/animations';
import { NotesService } from '~/notes/services/notes.service';
import { RadSideDrawer } from 'nativescript-ui-sidedrawer';
import { RadSideDrawerComponent } from 'nativescript-ui-sidedrawer/angular';

@Component({
  moduleId: module.id,
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {
  private _elevation: number;
  private _notesList: Notes[] = [];
  public isSelecting: boolean = false;
  public fontSize: number = 16;

  private drawer: RadSideDrawer;
  public showDrawer: boolean;
  public eventHandler: boolean = true;
  @ViewChild(RadSideDrawerComponent) public drawerComponent: RadSideDrawerComponent;

  constructor(private _routerExtensions: RouterExtensions,
    private _notesService: NotesService) {
    this._elevation = Elevation.BOTTOM_NAVIGATION_BAR;
    this._notesList = this._notesService.getNoteList();
  }

  ngOnInit() {
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

  get dataItems() {
    return this._notesList;
  }

  public goToNewNoteView() {
    this._routerExtensions.navigate(['/notes/new-note'], {
      transition: {
        name: "slideTop",
        duration: 100
      }
    });
    this.isSelecting = false;
    this._notesList.forEach(x => x.isSelected = false);
  }

  public select(id: number) {
    if (!this.isSelecting) {
      this.goToOpenNoteView(id);
    }
    else {
      this._notesList.find(x => x.noteId == id).isSelected = !this._notesList.find(x => x.noteId == id).isSelected;
      if (this._notesList.filter(x => x.isSelected === true).length <= 0) {
        this.isSelecting = false;
      }
    }
  }

  public goToOpenNoteView(id: number) {
    this._routerExtensions.navigate(['/notes/open-note'], {
      transition: {
        name: "slideTop",
        duration: 100
      }
    });
    this._notesService.setNoteData(id);
    this.isSelecting = false;
    this._notesList.forEach(x => x.isSelected = false);
  }

  public startSelection(id: number) {
    this._notesList.find(x => x.noteId == id).isSelected = !this._notesList.find(x => x.noteId == id).isSelected;
    if (this._notesList.filter(x => x.isSelected === true).length > 0) {
      this.isSelecting = true;
    }
    else {
      this.isSelecting = false;
    }
  }


  public cancel() {
    this.isSelecting = false;
    this._notesList.forEach(x => x.isSelected = false);
  }

  public delete() {
    this.isSelecting = false;
    this._notesList = this._notesList.filter(x => x.isSelected != true);
    this._notesService.deleteNotesFromService(this._notesList);
  }
}

