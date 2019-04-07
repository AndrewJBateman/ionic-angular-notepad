import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

import { Note } from '../interfaces/note';

// service will be available anywhere in the app.
@Injectable({
  providedIn: 'root'
})
export class NotesService {

  public notes: Note[] = [];
  public loaded = false;

  constructor(private storage: Storage) { }

  // load data from storage. Promise resolves when operation is complete.
  // can replace this method with us of observables.
  load(): Promise<boolean> {
    return new Promise((resolve) => {
      this.storage.get('notes').then((notes) => {

        if (notes != null) {
          this.notes = notes;
        }

        this.loaded = true;
        resolve(true);

      });

    });

  }

  save(): void {
    this.storage.set('notes', this.notes);
  }
  // search through array and return the note with the id passed in.
  getNote(id): Note {
    return this.notes.find(note => note.id === id);
  }

  // create a new note with a unique id and push into notes array.
  createNote(title): void {

    const id = Math.max(...this.notes.map(note => parseInt(note.id, 10)), 0) + 1;

    this.notes.push({
      id: id.toString(),
      title: title,
      content: ''
    });

    this.save();
  }

  deleteNote(note): void {
    const index = this.notes.indexOf(note);

    if (index > -1) {
      this.notes.splice(index, 1);
      this.save();
    }

  }

}
