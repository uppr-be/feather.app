import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { NzGridModule } from 'ng-zorro-antd/grid';

@Component({
  selector: 'app-profile',
  imports: [CommonModule, NzGridModule, TranslateModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileComponent {}
