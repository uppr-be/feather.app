import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-timer',
  imports: [],
  templateUrl: './timer.component.html',
  styleUrl: './timer.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TimerComponent {

}
