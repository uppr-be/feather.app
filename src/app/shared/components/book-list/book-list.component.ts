import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzListModule } from 'ng-zorro-antd/list';
import {
  BookCard,
  BookCardComponent,
} from '../cards/book-card/book-card.component';
import { RegularTitleComponent } from '../titles/regular-title/regular-title.component';

@Component({
  selector: 'app-book-list',
  imports: [
    CommonModule,
    BookCardComponent,
    RegularTitleComponent,
    NzListModule,
    NzGridModule,
  ],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookListComponent {
  @Input() title!: string;
  @Output() onMoreClicked = new EventEmitter<void>();
  @Input() books!: BookCard[];
}
