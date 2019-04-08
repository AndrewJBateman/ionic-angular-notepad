import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

import { NotesService } from '../services/notes.service';
import { Note } from '../interfaces/note';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  public note: Note;

  constructor(private route: ActivatedRoute, private notesService: NotesService, private navCtrl: NavController) {

    // initialise placeholder
    this.note = {
      id: '',
      title: '',
      content: ''
    };
  }

  ngOnInit() {

    // get the id of the note from the URL using the ActivatedRoute interface.
    const noteId = this.route.snapshot.paramMap.get('id');

    // check data is loaded before getting note
    if (this.notesService.loaded) {
      this.note = this.notesService.getNote(noteId);
    } else {
      this.notesService.load().then(() => {
      this.note = this.notesService.getNote(noteId);
      });
    }
  }

  //  function called every time a note is changed.
  noteChanged() {
    this.notesService.save();
  }

  // function to delete a note thenn navigate back to the Home page.
  deleteNote() {
    this.notesService.deleteNote(this.note);
    this.navCtrl.navigateBack('/notes');
  }

}
