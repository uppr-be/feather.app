import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzPopoverModule } from 'ng-zorro-antd/popover';
import { IconComponent } from '../icons/icon.component';

@Component({
  selector: 'app-notifications',
  imports: [IconComponent, NzBadgeModule, NzPopoverModule],
  providers: [],
  templateUrl: './notifications.component.html',
  styleUrl: './notifications.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotificationsComponent {}
