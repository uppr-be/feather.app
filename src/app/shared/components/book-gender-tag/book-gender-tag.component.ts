import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { BookGender } from '@core/types/book-gender.type';

@Component({
  selector: 'app-book-gender-tag',
  imports: [CommonModule],
  templateUrl: './book-gender-tag.component.html',
  styleUrl: './book-gender-tag.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookGenderTagComponent {
  @Input() gender!: BookGender;
}
