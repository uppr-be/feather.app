import { OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
type Constructor<T = {}> = new (...args: any[]) => T;

export function mixinDestroyable<TBase extends Constructor>(Base: TBase) {
  return class extends Base implements OnDestroy {
    protected destroyable: Subject<boolean> = new Subject();

    ngOnDestroy(): void {
      this.destroyable.next(true);
      this.destroyable.complete();
    }

    constructor(...args: any[]) {
      super(...args);
    }
  };
}

export abstract class Destroyable extends mixinDestroyable(class {}) {}
