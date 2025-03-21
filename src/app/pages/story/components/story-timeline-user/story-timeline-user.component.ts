import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CountryFlagComponent } from '@shared/components/country-flag/country-flag.component';
import { UserAvatarComponent } from '@shared/components/user/user-avatar/user-avatar.component';
import { UserPointsComponent } from '@shared/components/user/user-points/user-points.component';
import { SubscribeButtonComponent } from '../../../../shared/components/buttons/subscribe-button/subscribe-button.component';

@Component({
  selector: 'app-story-timeline-user',
  imports: [
    CommonModule,
    UserAvatarComponent,
    UserPointsComponent,
    CountryFlagComponent,
    SubscribeButtonComponent,
  ],
  templateUrl: './story-timeline-user.component.html',
  styleUrl: './story-timeline-user.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StoryTimelineUserComponent {}
