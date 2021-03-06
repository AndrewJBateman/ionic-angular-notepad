# :zap: Ionic Angular Notepad

* Ionic 4 app to Create, Read, Update and Delete notes. Notes are stored and retrieved using the Ionic Storage component.
* Part 2: NgRX added for state management.
* **Note:** to open web links in a new window use: _ctrl+click on link_

![GitHub repo size](https://img.shields.io/github/repo-size/AndrewJBateman/ionic-angular-notepad?style=plastic)
![GitHub pull requests](https://img.shields.io/github/issues-pr/AndrewJBateman/ionic-angular-notepad?style=plastic)
![GitHub Repo stars](https://img.shields.io/github/stars/AndrewJBateman/ionic-angular-notepad?style=plastic)
![GitHub last commit](https://img.shields.io/github/last-commit/AndrewJBateman/ionic-angular-notepad?style=plastic)

## :page_facing_up: Table of contents

* [General info](#general-info)
* [Screenshots](#screenshots)
* [Technologies](#technologies)
* [Setup](#setup)
* [Features](#features)
* [Status](#status)
* [Inspiration](#inspiration)
* [Contact](#contact)

## :books: General info

* This app only has 2 pages:

1. **Home** page with a list of note titles
2. **Detail** page with a text area so note details can be added and changed. The entire note can also be deleted from this page.

## :camera: Screenshots

![Example screenshot](./img/notes-page.png)
![Example screenshot](./img/note-text.png)

## :signal_strength: Technologies

* [Ionic framework v4](https://ionicframework.com/docs).
* [Ionic CLI v7](https://ionicframework.com/docs).
* [Angular 7](https://angular.io/).
* [Ionic Storage v2](https://www.npmjs.com/package/@ionic/storage), a simple key-value module with SQLite.
* [rxjs v6](https://rxjs-dev.firebaseapp.com/)
* [ngrx/effects v7](https://ngrx.io/guide/effects) use streams to provide new sources of actions to reduce state based on external interactions such as network requests, web socket messages and time-based events.

## :floppy_disk: Setup

* Install dependencies with npm install.
* Run app using `ionic serve` then navigate to `http://localhost:8100/`.
* The colour scheme can be changed by updating the ./theme/variables.scss file. Use the [Ionic Colour Generator](https://ionicframework.com/docs/theming/color-gencrator).

## :computer: Dependency Issues

**For dependency error:** '_ERROR in The Angular Compiler requires TypeScript >=3.1.1 and <3.2.0 but 3.2.1 was found instead_':
**Solution:** [npm i typescript@3.1.6 --save-dev --save-exact](https://stackoverflow.com/questions/53578372/error-in-the-angular-compiler-requires-typescript-3-1-1-and-3-2-0-but-3-2-1-w).

**For dependency error:** '_Module not found: Error: Can't resolve 'core-js/es7/reflect'_':
**Solution:** Add this to the `tsconfig.json` file:

```json
"paths": {
  "core-js/es7/reflect": ["node_modules/core-js/proposals/reflect-metadata"],
  "core-js/es6/*": ["node_modules/core-js/es/*"]
}

```

## :computer: Code Examples

* _Detail page showing the Ionic components_

```html
<ion-header>
  <ion-toolbar color="tertiary">
    <ion-buttons slot="start">
      <ion-back-button defaultHref="/notes"></ion-back-button>
    </ion-buttons>
    <ion-title>{{ note.title }}</ion-title>
    <ion-buttons slot="end">
      <ion-button (click)="deleteNote()">
        <ion-icon slot="icon-only" name="trash"></ion-icon>
      </ion-button>
    </ion-buttons>
  </ion-toolbar>
</ion-header>

<!-- ngModel used for 2-way data-binding to update the content 
property of the note with any change in the <ion-textarea> value -->
<ion-content padding>
  <ion-textarea
    (input)="noteChanged()"
    [(ngModel)]="note.content"
    placeholder="...something noteworthy?">
  </ion-textarea>
</ion-content>
```

## :cool: Features

* A simple notepad application that uses many Ionic/Angular/Typescript core concepts such as:

1. Navigation/Routing
2. Templates
3. Two-way data binding
4. Interpolations
5. Event binding
6. Types and Interfaces
7. Services
8. Data Input
9. Data Storage
10. Styling
11. NgRX observables

* This app allows the user to:

1. create, delete, and edit notes
2. Save and load those notes from storage
3. View a list of notes
4. View note details

* The ionic template default colors can be changed to:

1. primary
2. secondary
3. tertiary
4. light
5. danger
6. dark

## :clipboard: Status & To-Do List

* Status: Working
* To-Do: add delete function to Home page. Add a createdAt date. Consider a theme change button to change colors.

## :clap: Inspiration

* [JOSH MORONY's Ionic Tutorial part 1: Building a Notepad Application from Scratch with Ionic](https://www.joshmorony.com/building-a-notepad-application-from-scratch-with-ionic/).
* [JOSH MORONY's Ionic Tutorial part 2: Using NgRx for State Management in an Ionic & Angular Application](https://www.joshmorony.com/using-ngrx-for-state-management-in-an-ionic-angular-application/)
* [JOSH MORONY's Ionic Tutorial part 3: Using NgRx Effects for Data Loading in an Ionic & Angular Application](https://www.joshmorony.com/using-ngrx-effects-for-data-loading-in-an-ionic-angular-application/)

## :file_folder: License

* This project is licensed under the terms of the MIT license.

## :envelope: Contact

* Repo created by [ABateman](https://github.com/AndrewJBateman), email: gomezbateman@yahoo.com
