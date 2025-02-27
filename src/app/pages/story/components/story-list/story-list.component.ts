import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { StorySequenceComponent } from '../story-sequence/story-sequence.component';

@Component({
  selector: 'app-story-list',
  imports: [StorySequenceComponent],
  templateUrl: './story-list.component.html',
  styleUrl: './story-list.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StoryListComponent {
  @Input() sequences!: string[];
}
