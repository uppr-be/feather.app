import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-regular-title',
  imports: [CommonModule, TranslateModule],
  templateUrl: './regular-title.component.html',
  styleUrl: './regular-title.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegularTitleComponent {
  @Input() title!: string;
  @Input() hasMore?: boolean;
  @Output() onMoreClicked = new EventEmitter<void>();
}
