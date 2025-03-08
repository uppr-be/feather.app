import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IconComponent } from '../../icons/icon.component';

@Component({
  selector: 'app-user-points',
  imports: [IconComponent],
  templateUrl: './user-points.component.html',
  styleUrl: './user-points.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserPointsComponent {
  @Input() points!: number;
}
