import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IconComponent } from '../icons/icon.component';

@Component({
  selector: 'app-side-menu',
  imports: [CommonModule, IconComponent, RouterModule],
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SideMenuComponent {
  public leftSide = false;
}
