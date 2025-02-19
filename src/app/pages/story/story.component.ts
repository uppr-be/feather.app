import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { NzGridModule } from 'ng-zorro-antd/grid';

@Component({
  selector: 'app-story',
  imports: [CommonModule, NzGridModule, TranslateModule],
  templateUrl: './story.component.html',
  styleUrl: './story.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StoryComponent {}
