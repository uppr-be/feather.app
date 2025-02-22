import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IconComponent } from '../icons/icon.component';
import { NotificationsComponent } from '../notifications/notifications.component';
import { TimerComponent } from '../timer/timer.component';

@Component({
  selector: 'app-user-information',
  imports: [
    CommonModule,
    TimerComponent,
    NotificationsComponent,
    IconComponent,
  ],
  templateUrl: './user-information.component.html',
  styleUrl: './user-information.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserInformationComponent {
  public points: number = 2151;
}
