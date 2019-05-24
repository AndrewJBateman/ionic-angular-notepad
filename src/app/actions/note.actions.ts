import { Action } from '@ngrx/store';
import { Note } from '../interfaces/note';

// enumerated action types relatd to notes and description
// iosource of action is shown in []
export enum ActionTypes {
	CreateNote = '[Notes Service] Create note',
	DeleteNote = '[Notes Service] Delete Note'
}

// create a class for each action
export class CreateNote implements Action {
	readonly type = ActionTypes.CreateNote;

	constructor(public payload: { note: Note }) {}
}

export class DeleteNote implements Action {
	readonly type = ActionTypes.DeleteNote;

	constructor(public payload: { note: Note }) {}
}

// export every action created
export type ActionsUnion = CreateNote | DeleteNote;
