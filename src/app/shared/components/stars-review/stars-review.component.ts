import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IconComponent } from '../icons/icon.component';

@Component({
  selector: 'app-stars-review',
  imports: [CommonModule, IconComponent],
  templateUrl: './stars-review.component.html',
  styleUrl: './stars-review.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StarsReviewComponent {
  @Input() review!: number;
}
