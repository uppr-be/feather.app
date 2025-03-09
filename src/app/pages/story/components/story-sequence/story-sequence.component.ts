import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { StoryTimelineUserComponent } from '../story-timeline-user/story-timeline-user.component';

@Component({
  selector: 'app-story-sequence',
  imports: [StoryTimelineUserComponent],
  templateUrl: './story-sequence.component.html',
  styleUrl: './story-sequence.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StorySequenceComponent {
  @Input() sequence!: string;
}
