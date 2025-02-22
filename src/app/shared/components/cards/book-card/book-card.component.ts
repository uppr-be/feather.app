import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { BookGender } from '@core/types/book-gender.type';
import { TranslateModule } from '@ngx-translate/core';
import { BookGenderTagComponent } from '../../book-gender-tag/book-gender-tag.component';
import { IconComponent } from '../../icons/icon.component';
import { StarsReviewComponent } from '../../stars-review/stars-review.component';

export type BookCard = {
  id: number;
  title: string;
  review: number;
  nbParticipations: number;
  cover: string;
  gender: BookGender;
};

@Component({
  selector: 'app-book-card',
  imports: [
    CommonModule,
    TranslateModule,
    IconComponent,
    BookGenderTagComponent,
    StarsReviewComponent,
  ],
  templateUrl: './book-card.component.html',
  styleUrl: './book-card.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookCardComponent {
  @Input() book!: BookCard;
  @Output() bookSelected = new EventEmitter<number>();
}
