import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserComponent {

}
