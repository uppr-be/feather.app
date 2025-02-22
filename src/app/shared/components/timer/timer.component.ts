import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IconComponent } from '../icons/icon.component';

@Component({
  selector: 'app-timer',
  imports: [CommonModule, IconComponent],
  templateUrl: './timer.component.html',
  styleUrl: './timer.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TimerComponent {
  public last = 3;
  public progress = 80;
}
