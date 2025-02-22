import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-bubble-title',
  imports: [],
  templateUrl: './bubble-title.component.html',
  styleUrl: './bubble-title.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BubbleTitleComponent {
  @Input() title!: string;
}
