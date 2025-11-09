import { inject, Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { MatDialog } from '@angular/material/dialog';
import { Folder, MaterialsFacade } from '../../../../../data-access/src';


type FoldersListState = {
  folders: Folder[],
}

const initialState: FoldersListState = {
  folders: [],
};

@Injectable()
export class FoldersListContainerStore extends ComponentStore<FoldersListState> {
  private readonly materialsFacade = inject(MaterialsFacade);

  private readonly dialog = inject(MatDialog);

  private readonly folders$ = this.select(({folders}) => folders);
  public readonly status$ = this.select(this.materialsFacade.folderStatus$, (status) => status);
}
