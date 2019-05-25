import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, switchMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

import { DataService } from '../services/data.service';
import * as DataActions from '../actions/data.actions';

@Injectable()
export class DataEffects {
	constructor(private actions: Actions, private dataService: DataService) {}


	// Listen for LoadDataBegin, trigger LoadDataSuccess if the HTTP request succeeds,
	// trigger LoadDataFailure if it fails.
	@Effect()
	loadData = this.actions.pipe(
		ofType(DataActions.ActionTypes.LoadDataBegin),

		// return observable from http request to load data
		// use map and catchError operators
		switchMap(() => {
			return this.dataService.loadData().pipe(
				map(data => new DataActions.LoadDataSuccess({ data: data })),
				catchError(error =>
					of(new DataActions.LoadDataFailure({ error: error }))
				)
			);
		})
	);
}

