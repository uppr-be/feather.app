import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { BubbleTitleComponent } from '@shared/components/titles/bubble-title/bubble-title.component';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { BookListComponent } from '../../shared/components/book-list/book-list.component';
import { BookCard } from '../../shared/components/cards/book-card/book-card.component';
import { BookGenderListComponent } from './components/book-gender-list/book-gender-list.component';

@Component({
  selector: 'app-home',
  imports: [
    CommonModule,
    NzGridModule,
    TranslateModule,
    BubbleTitleComponent,
    BookListComponent,
    BookGenderListComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  public book: BookCard[] = [
    {
      id: 1,
      title: 'The Hobbit',
      rating: 4,
      sequences: [],
      gender: 'fantastic',
      nbParticipations: 10,
      cover:
        'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/art-book-cover-design-template-34323b0f0734dccded21e0e3bebf004c_screen.jpg',
    },
    {
      id: 1,
      title: 'The Hobbit',
      rating: 4,
      sequences: [],
      gender: 'fantastic',
      nbParticipations: 10,
      cover:
        'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/art-book-cover-design-template-34323b0f0734dccded21e0e3bebf004c_screen.jpg',
    },
    {
      id: 1,
      title: 'The Hobbit',
      rating: 4,
      sequences: [],
      gender: 'fantastic',
      nbParticipations: 10,
      cover:
        'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/art-book-cover-design-template-34323b0f0734dccded21e0e3bebf004c_screen.jpg',
    },
    {
      id: 1,
      title: 'The Hobbit',
      rating: 4,
      sequences: [],
      gender: 'fantastic',
      nbParticipations: 10,
      cover:
        'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/art-book-cover-design-template-34323b0f0734dccded21e0e3bebf004c_screen.jpg',
    },
    {
      id: 1,
      title: 'The Hobbit',
      rating: 4,
      sequences: [],
      gender: 'fantastic',
      nbParticipations: 10,
      cover:
        'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/art-book-cover-design-template-34323b0f0734dccded21e0e3bebf004c_screen.jpg',
    },
  ];
}
