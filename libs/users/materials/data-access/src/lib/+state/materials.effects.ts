import { Actions, createEffect, ofType } from '@ngrx/effects';
import { inject, Injectable } from '@angular/core';
import { ApiService } from '../../../../../../core/http/src';
import * as MaterialsActions from './materials.actions';
import { catchError, map, of, switchMap, tap } from 'rxjs';
import { Folder } from '../models/folder.model';

@Injectable()
export class MaterialsEffects {

  loadFolders = createEffect(
    () => {
      const action$ = inject(Actions);
      const apiService = inject(ApiService);

      return action$.pipe(
        ofType(MaterialsActions.loadFolders),
        switchMap(() =>
          apiService.get<Folder[]>('/folder').pipe(
            map((folders) =>
              MaterialsActions.loadFoldersSuccess({ folders })
            ),
            catchError((error) => {
              console.error('Error', error);
              return of(MaterialsActions.loadFoldersFailure({ error }))
            })
          )
        )
      )
    }, { functional: true }
  )
}
