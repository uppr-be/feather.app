import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '@shared/components/header/header.component';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { SideMenuComponent } from './shared/components/side-menu/side-menu.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NzLayoutModule, HeaderComponent, SideMenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.less',
})
export class AppComponent {}
