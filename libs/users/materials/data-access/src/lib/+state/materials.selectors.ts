import { createFeatureSelector, createSelector } from '@ngrx/store';
import { MaterialsState, MATERIALS_FEATURE_KEY, materialsAdapter } from './materials.reducer';

export const selectMaterialsState = createFeatureSelector<MaterialsState>(MATERIALS_FEATURE_KEY);

const { selectAll, selectEntities } = materialsAdapter.getSelectors();

export const selectFoldersStatus = createSelector(
  selectMaterialsState,
  (state: MaterialsState) => state?.status || 'init'
)

export const selectAllFolders = createSelector(
  selectMaterialsState,
  (state: MaterialsState) => state ? selectAll(state) : []
)

export const selectFoldersEntities = createSelector(
  selectMaterialsState,
  (state: MaterialsState) => state ? selectEntities(state) : {}
)
