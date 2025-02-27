import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { BookCard } from '@shared/components/cards/book-card/book-card.component';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { BookGenderTagComponent } from '../../../../shared/components/book-gender-tag/book-gender-tag.component';
import { IconComponent } from '../../../../shared/components/icons/icon.component';
import { StarsRatingComponent } from '../../../../shared/components/stars-rating/stars-rating.component';
import { StoryParticipantsComponent } from '../story-participants/story-participants.component';

@Component({
  selector: 'app-story-information',
  imports: [
    CommonModule,
    StarsRatingComponent,
    BookGenderTagComponent,
    NzButtonModule,
    IconComponent,
    StoryParticipantsComponent,
  ],
  templateUrl: './story-information.component.html',
  styleUrl: './story-information.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StoryInformationComponent {
  @Input() story!: BookCard;
}
