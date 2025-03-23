import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  signal,
} from '@angular/core';
import { ActivationEnd, Router, RouterModule } from '@angular/router';
import { Destroyable } from '@core/utils/destroyable';
import { filter, map, takeUntil } from 'rxjs';
import { UserInformationComponent } from '../user/user-information/user-information.component';

@Component({
  selector: 'app-header',
  imports: [UserInformationComponent, CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent extends Destroyable implements OnInit {
  public smallHeader = signal<boolean>(false);

  constructor(private router: Router) {
    super();
  }

  ngOnInit(): void {
    this.router.events
      .pipe(
        filter((routeEvent) => routeEvent instanceof ActivationEnd),
        map((routeEvent: any) => routeEvent.snapshot.routeConfig.data),
        takeUntil(this.destroyable)
      )
      .subscribe((e) => this.smallHeader.set(e.smallHeader));
  }
}
