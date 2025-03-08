import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { TimerComponent } from '../../timer/timer.component';
import { UserAvatarComponent } from '../user-avatar/user-avatar.component';
import { UserPointsComponent } from '../user-points/user-points.component';

@Component({
  selector: 'app-user-information',
  imports: [
    CommonModule,
    TimerComponent,
    NotificationsComponent,
    UserAvatarComponent,
    UserPointsComponent,
  ],
  templateUrl: './user-information.component.html',
  styleUrl: './user-information.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserInformationComponent {
  public points: number = 2151;
}
