import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Folder } from '../../../../../data-access/src';
import { MatCard, MatCardContent } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'folders-card',
  standalone: true,
  imports: [MatIconModule, MatCard, MatCardContent],
  templateUrl: './folders-card.component.html',
  styleUrls: ['./folders-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FoldersCardComponent {
  @Input({ required: true })
  folder!: Folder;

  public dateFormat(time: number): string {
    const date = new Date(time);
    return `${date.getDate()}
    ${date.toLocaleString('default', { month: 'short' }).slice(0, -1)}
    ${date.getFullYear()}`;
  }
}
