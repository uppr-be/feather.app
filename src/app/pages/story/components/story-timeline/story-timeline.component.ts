import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { StoryTimelineUserComponent } from '../story-timeline-user/story-timeline-user.component';

@Component({
  selector: 'app-story-timeline',
  imports: [StoryTimelineUserComponent, CommonModule],
  templateUrl: './story-timeline.component.html',
  styleUrl: './story-timeline.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StoryTimelineComponent {}
