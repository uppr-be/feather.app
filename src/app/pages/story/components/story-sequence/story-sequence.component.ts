import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-story-sequence',
  imports: [],
  templateUrl: './story-sequence.component.html',
  styleUrl: './story-sequence.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StorySequenceComponent {
  @Input() sequence!: string;
}
