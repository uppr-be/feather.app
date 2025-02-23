import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { BookGender } from '@core/types/book-gender.type';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-book-gender-card',
  imports: [TranslateModule, CommonModule],
  templateUrl: './book-gender-card.component.html',
  styleUrl: './book-gender-card.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookGenderCardComponent {
  @Input() gender!: BookGender;
}
