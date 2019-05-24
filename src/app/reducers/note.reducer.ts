// import everything from the notes.actions file
import * as fromNote from '../actions/note.actions';
import { Note } from '../interfaces/note';

// define structure of the note shape
export interface NoteState {
	data: Note[];
}

// define an initial state
export const initialState: NoteState = {
	data: []
};

// reducer function
export function reducer(
	state = initialState,
	action: fromNote.ActionsUnion
): NoteState {
	switch (action.type) {
		case fromNote.ActionTypes.CreateNote: {
			// use spread operator to return a new state with all the existing properties and data
			// but create a new array  to contain all existing data + new note data
			return {
				...state,
				data: [...state.data, action.payload.note]
			};
		}

		case fromNote.ActionTypes.DeleteNote: {
			return {
				...state,
				...state.data.splice(state.data.indexOf(action.payload.note), 1)
			};
		}

		default: {
			return state;
		}
	}
}

// when given the notes from the state tree it will return the data property
export const getNotes = (state: NoteState) => state.data;

// takes in note id so it can search for a match
export const getNoteById = (state: NoteState, props: { id: string }) =>
	state.data.find(note => note.id === props.id);
