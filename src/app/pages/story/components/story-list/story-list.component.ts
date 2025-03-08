import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IconComponent } from '../../../../shared/components/icons/icon.component';
import { StorySequenceComponent } from '../story-sequence/story-sequence.component';
import { StoryTimelineComponent } from '../story-timeline/story-timeline.component';

@Component({
  selector: 'app-story-list',
  imports: [
    StorySequenceComponent,
    IconComponent,
    CommonModule,
    StoryTimelineComponent,
  ],
  templateUrl: './story-list.component.html',
  styleUrl: './story-list.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StoryListComponent {
  @Input() sequences!: string[];

  public timelineOpend: boolean = true;

  public toggleTimeline(): void {
    this.timelineOpend = !this.timelineOpend;
  }
}
