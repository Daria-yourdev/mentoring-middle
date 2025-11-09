import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Folder } from '../models/folder.model';
import { Material } from '../models/material.model';
import { LoadingStatus } from '../../../../../../core/data-access/src';
import { createFeature, createReducer, on } from '@ngrx/store';
import * as MaterialsActions from './materials.actions';

export const MATERIALS_FEATURE_KEY = 'materials';

export type FoldersErrors = {
  status: number;
  [key: string]: unknown;
};

export interface MaterialsState extends EntityState<Folder> {
  materials: Material[],
  status: LoadingStatus,
}

export const materialsAdapter: EntityAdapter<Folder> = createEntityAdapter<Folder>()

export const initialMaterialsState: MaterialsState = materialsAdapter.getInitialState({
  materials: [],
  status: 'init',
})

export const materialsFeature = createFeature({
  name: 'materials',
  reducer: createReducer(
    initialMaterialsState,

    on(MaterialsActions.loadFolders, (state) => ({
      ...state, status: 'loading' as const
    })),
    on(MaterialsActions.loadFoldersSuccess, (state, { folders }) =>
      materialsAdapter.setAll(folders, { ...state, status: 'loaded' as const })
    ),
    on(MaterialsActions.loadFoldersFailure, (state, { error }) => ({
        ...state, status: 'error' as const, error
      })
    ),
  ),
});
