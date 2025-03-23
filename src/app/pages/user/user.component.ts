import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { StoryTimelineUserComponent } from '@pages/story/components/story-timeline-user/story-timeline-user.component';
import { BookCard } from '@shared/components/cards/book-card/book-card.component';
import { BookListComponent } from '../../shared/components/book-list/book-list.component';

@Component({
  selector: 'app-user',
  imports: [
    CommonModule,
    TranslateModule,
    StoryTimelineUserComponent,
    BookListComponent,
  ],
  templateUrl: './user.component.html',
  styleUrl: './user.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserComponent {
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
