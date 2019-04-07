import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { NotesService } from '../services/notes.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(public notesService: NotesService, private alertCtrl: AlertController, private navCtrl: NavController) {

  }

  // load data from storage as soon as app is started.
  ngOnInit() {
    this.notesService.load();
  }

  // add note method to add a new note
  addNote() {
    this.alertCtrl.create({
      header: 'New note',
      message: 'What is the title of the note?',
      inputs: [
        {
          type: 'text',
          name: 'title'
        }

      ],
      buttons: [
        {
          text: 'Cancel'
        },
        {
          text: 'Save',
          handler: (data) => {
            this.notesService.createNote(data.title);
          }
        }
      ]
    }).then((alert) => {
      alert.present();
    });
  }
}
