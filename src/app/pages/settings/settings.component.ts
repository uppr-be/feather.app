import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { NzGridModule } from 'ng-zorro-antd/grid';

@Component({
  selector: 'app-settings',
  imports: [CommonModule, NzGridModule, TranslateModule],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SettingsComponent {}
