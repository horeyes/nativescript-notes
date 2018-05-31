import { Injectable } from '@angular/core';
import { Notes } from '~/notes/models/notes';

@Injectable()
export class NotesService {

  private _notesList: Notes[];
  private _noteData: Notes;

  constructor() {
    this._notesList = [];
    this._noteData = new Notes();
  }

  public addNewNote(newNote: Notes) {
    if (newNote.title.length > 0 || 0 < newNote.note.length) {
      newNote.noteId = this._notesList.length + 1;
      this._notesList.push(newNote);
    }
  }

  public editNote(noteToEdit: Notes) {
    let index = this._notesList.indexOf(this._notesList.find(x => x.noteId === noteToEdit.noteId))
    this._notesList[index].noteId = noteToEdit.noteId;
    this._notesList[index].title = noteToEdit.title;
    this._notesList[index].note = noteToEdit.note;
    this._notesList[index].date = noteToEdit.date;
    this._notesList[index].hasDateChecked = noteToEdit.hasDateChecked;
  }
  
  public getNoteList() {
    return this._notesList;
  }

  public setNoteData(id: number) {
    this._noteData = this._notesList.find(x => x.noteId === id);
  }

  public getNoteData() {
    return this._noteData;
  }

  public deleteNotesFromService(_deleteNoteList: Notes[]) {
    this._notesList = _deleteNoteList;
  }

}
