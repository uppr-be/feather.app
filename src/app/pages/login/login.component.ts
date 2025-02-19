import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { NzGridModule } from 'ng-zorro-antd/grid';

@Component({
  selector: 'app-login',
  imports: [CommonModule, NzGridModule, TranslateModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {}
