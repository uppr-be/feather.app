import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-story-participants',
  imports: [CommonModule],
  templateUrl: './story-participants.component.html',
  styleUrl: './story-participants.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StoryParticipantsComponent {
  @Input() participants = {
    total: 17,
    last: [
      'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/art-book-cover-design-template-34323b0f0734dccded21e0e3bebf004c_screen.jpg',
      'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/art-book-cover-design-template-34323b0f0734dccded21e0e3bebf004c_screen.jpg',
      'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/art-book-cover-design-template-34323b0f0734dccded21e0e3bebf004c_screen.jpg',
    ],
  };
}
