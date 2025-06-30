import { Injectable } from '@angular/core';
import { Overlay, OverlayRef, OverlayConfig } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { DialogComponent } from './cdk-dialog-overview-example-dialog';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class DialogService {
  private overlayRef: OverlayRef | null = null;
  private result$ = new Subject<string | null>();

  constructor(private overlay: Overlay) {}

  open(initialValue: string = '') {
    if (this.overlayRef) this.close();

    const config = new OverlayConfig({
      hasBackdrop: true,
      backdropClass: 'custom-backdrop',
      positionStrategy: this.overlay.position().global().centerHorizontally().centerVertically()
    });

    this.overlayRef = this.overlay.create(config);

    const portal = new ComponentPortal(DialogComponent);
    const componentRef = this.overlayRef.attach(portal);
    componentRef.instance.initialValue = initialValue;

    componentRef.instance.closed.subscribe(result => {
      this.result$.next(result);
      this.result$.complete();
      this.close();
    });

    this.overlayRef.backdropClick().subscribe(() => this.close());
  }

  afterClosed() {
    return this.result$.asObservable();
  }

  close() {
    if (this.overlayRef) {
      if (this.overlayRef.hasAttached()) {
        this.overlayRef.detach();
      }
      this.overlayRef.dispose();
      this.overlayRef = null;
    }
  }
}
