import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MaterialsFacade } from '../../../../../data-access/src';
import { FoldersListComponent } from '../folders-list/folders-list.component';
import { LetDirective } from '@ngrx/component';

@Component({
  selector: 'folders-list-container',
  standalone: true,
  imports: [FoldersListComponent, LetDirective],
  templateUrl: './folders-list-container.component.html',
  styleUrls: ['./folders-list-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FoldersListContainerComponent {
  private readonly materialsFacade = inject(MaterialsFacade);

  public readonly foldersStatus$ = this.materialsFacade.folderStatus$;
  public readonly allFolders$ = this.materialsFacade.allFolders$;

  constructor() {
    this.materialsFacade.loadFolders();
  }
}
