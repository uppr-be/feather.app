import {
  ComponentPortal,
  PortalModule,
  TemplatePortal,
} from '@angular/cdk/portal';
import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  NO_ERRORS_SCHEMA,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { RouterModule } from '@angular/router';
import { SideMenuPortalService } from '@core/services/side-menu-portal.service';
import { Observable } from 'rxjs';
import { IconComponent } from '../icons/icon.component';

@Component({
  selector: 'app-side-menu',
  imports: [CommonModule, IconComponent, RouterModule, PortalModule],
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.less',
  schemas: [NO_ERRORS_SCHEMA],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SideMenuComponent implements AfterViewInit {
  public leftSide = false;
  public activePortal!: Observable<
    TemplatePortal<any> | ComponentPortal<any> | null
  >;
  public disabledButton!: Observable<string[]>;
  @ViewChild('myTemplate') myTemplate!: TemplateRef<any>;

  constructor(
    private portalService: SideMenuPortalService,
    private cdr: ChangeDetectorRef
  ) {}

  ngAfterViewInit() {
    this.activePortal = this.portalService.currentPortal$;
    this.disabledButton = this.portalService.disabledDefaultButton$;
    this.cdr.detectChanges();
  }
}
