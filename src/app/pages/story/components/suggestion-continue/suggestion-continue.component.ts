import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IconComponent } from '../../../../shared/components/icons/icon.component';

@Component({
  selector: 'app-suggestion-continue',
  imports: [CommonModule, TranslateModule, IconComponent],
  templateUrl: './suggestion-continue.component.html',
  styleUrl: './suggestion-continue.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SuggestionContinueComponent {
  public randomNumeroBetween1and4: number = Math.floor(Math.random() * 4) + 1;
}
