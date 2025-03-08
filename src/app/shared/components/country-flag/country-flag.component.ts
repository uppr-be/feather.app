import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-country-flag',
  imports: [],
  templateUrl: './country-flag.component.html',
  styleUrl: './country-flag.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CountryFlagComponent {
  @Input() countryCode!: string;
}
