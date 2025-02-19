import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { NzGridModule } from 'ng-zorro-antd/grid';

@Component({
  selector: 'app-home',
  imports: [CommonModule, NzGridModule, TranslateModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {}
