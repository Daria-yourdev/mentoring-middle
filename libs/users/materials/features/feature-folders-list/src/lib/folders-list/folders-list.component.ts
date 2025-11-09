import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FoldersCardComponent } from '../folders-card/folders-card.component';
import { NgForOf, NgIf } from '@angular/common';
import { MatProgressBar } from '@angular/material/progress-bar';
import { FoldersListVM } from './folders-vm';
import { Folder } from '../../../../../data-access/src';

@Component({
  selector: 'folders-list',
  standalone: true,
  imports: [FoldersCardComponent, NgForOf, MatProgressBar, NgIf],
  templateUrl: './folders-list.component.html',
  styleUrls: ['./folders-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FoldersListComponent {
  @Input({ required: true })
  vm!: FoldersListVM;
}
