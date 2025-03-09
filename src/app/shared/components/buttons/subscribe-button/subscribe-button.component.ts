import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { NzButtonModule } from 'ng-zorro-antd/button';

@Component({
  selector: 'app-subscribe-button',
  imports: [NzButtonModule, TranslateModule],
  templateUrl: './subscribe-button.component.html',
  styleUrl: './subscribe-button.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SubscribeButtonComponent {
  public subscribed = false;
}
