import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IconComponent } from '../icons/icon.component';

@Component({
  selector: 'app-stars-rating',
  imports: [CommonModule, IconComponent],
  templateUrl: './stars-rating.component.html',
  styleUrl: './stars-rating.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StarsRatingComponent {
  @Input() rating!: number;
}
