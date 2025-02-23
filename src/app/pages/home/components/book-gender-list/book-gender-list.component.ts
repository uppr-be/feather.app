import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { bookGender } from '@core/types/book-gender.type';
import { TranslateModule } from '@ngx-translate/core';
import { BookGenderCardComponent } from '../../../../shared/components/cards/book-gender-card/book-gender-card.component';
import { BubbleTitleComponent } from '../../../../shared/components/titles/bubble-title/bubble-title.component';

@Component({
  selector: 'app-book-gender-list',
  imports: [
    BubbleTitleComponent,
    TranslateModule,
    CommonModule,
    BookGenderCardComponent,
  ],
  templateUrl: './book-gender-list.component.html',
  styleUrl: './book-gender-list.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookGenderListComponent {
  public bookgender = bookGender;
}
