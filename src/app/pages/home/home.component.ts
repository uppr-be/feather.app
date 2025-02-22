import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { BubbleTitleComponent } from '@shared/components/titles/bubble-title/bubble-title.component';
import { RegularTitleComponent } from '@shared/components/titles/regular-title/regular-title.component';
import { NzGridModule } from 'ng-zorro-antd/grid';

@Component({
  selector: 'app-home',
  imports: [
    CommonModule,
    NzGridModule,
    TranslateModule,
    BubbleTitleComponent,
    RegularTitleComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {}
