import { ChangeDetectionStrategy, Component } from '@angular/core';
import { UserInformationComponent } from '../user/user-information/user-information.component';

@Component({
  selector: 'app-header',
  imports: [UserInformationComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {}
