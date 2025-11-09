import { createAction, props } from '@ngrx/store';
import { Folder } from '../models/folder.model';

export const loadFolders = createAction('[Materials Page] Load Folders');
export const loadFoldersSuccess = createAction('[Materials Page] Load Folders Success', props<{ folders: Folder[] }>());
export const loadFoldersFailure = createAction('[Materials Page] Load Folders Failure', props<{ error: any }>());
