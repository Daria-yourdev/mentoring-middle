import { inject, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import * as MaterialsSelectors from './materials.selectors';
import * as MaterialsActions from './materials.actions';

@Injectable({providedIn: 'root'})
export class MaterialsFacade {
  private readonly store = inject(Store)

  public readonly folderStatus$ = this.store.select(MaterialsSelectors.selectFoldersStatus)
  public readonly allFolders$ = this.store.select(MaterialsSelectors.selectAllFolders)

  loadFolders() {
    this.store.dispatch(MaterialsActions.loadFolders())
  }
}
