import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { NzGridModule } from 'ng-zorro-antd/grid';

@Component({
  selector: 'app-user',
  imports: [CommonModule, NzGridModule, TranslateModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserComponent {}
