import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'icon',
  imports: [CommonModule],
  templateUrl: './icon.component.html',
  styleUrl: './icon.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconComponent {
  @Input() name!: string;
  @Input() circle?: boolean;
  @Input() w?: number;
}
