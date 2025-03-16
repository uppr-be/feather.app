import { ComponentPortal, TemplatePortal } from '@angular/cdk/portal';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SideMenuPortalService {
  private portalSubject = new BehaviorSubject<
    TemplatePortal<any> | ComponentPortal<any> | null
  >(null);
  currentPortal$ = this.portalSubject.asObservable();
  public disabledDefaultButton$ = new BehaviorSubject<string[]>([]);

  setPortal(portal: TemplatePortal<any> | ComponentPortal<any>) {
    this.portalSubject.next(portal);
  }

  disableDefaultButton(buttons: string[]) {
    this.disabledDefaultButton$.next(buttons);
  }
}
