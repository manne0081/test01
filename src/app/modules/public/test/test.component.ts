import { CommonModule } from '@angular/common';
import { Component, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Overlay, OverlayModule, OverlayRef } from '@angular/cdk/overlay';
import { PortalModule, TemplatePortal } from '@angular/cdk/portal';

import { HeaderComponent } from '../../private/header/header.component';
import { TextFieldModule } from '@angular/cdk/text-field';

@Component({
    selector: 'app-test',
    standalone: true,
    imports: [
        CommonModule,
        RouterModule,
        HeaderComponent,
        TextFieldModule,
        OverlayModule, PortalModule
    ],
    templateUrl: './test.component.html',
    // styleUrl: './test.component.scss',
    styleUrls: ['./test.component.scss']
  })

export class TestComponent {
    title = 'test01';

    private overlayRef: OverlayRef | null = null;
    selectedOption: string | null = null;

    @ViewChild('dropdownMenu') dropdownMenu!: TemplateRef<any>;

    constructor(private overlay: Overlay, private viewContainerRef: ViewContainerRef) {}

    openDropdown(trigger: HTMLElement) {
        console.log('dropdownMenu:', this.dropdownMenu);

        if (this.overlayRef) {
            console.log("dispose overlay");
            this.overlayRef.dispose();
        }
        console.log("create positionStrategy");

        // const positionStrategy = this.overlay.position()
        //     .flexibleConnectedTo(trigger)
        //     .withPositions([{ originX: 'start', originY: 'bottom', overlayX: 'start', overlayY: 'top' }]);

        // const positionStrategy = this.overlay.position()
        //     .global()
        //     .centerHorizontally()
        //     .top('100px');

        const positionStrategy = this.overlay.position()
            .flexibleConnectedTo(trigger)
            .withPositions([
                { originX: 'start', originY: 'bottom', overlayX: 'start', overlayY: 'top' },
                { originX: 'start', originY: 'top', overlayX: 'start', overlayY: 'bottom' },
                { originX: 'end', originY: 'bottom', overlayX: 'end', overlayY: 'top' },
                { originX: 'end', originY: 'top', overlayX: 'end', overlayY: 'bottom' },
            ]);

        console.log("create overlay");

        this.overlayRef = this.overlay.create({ positionStrategy });
        console.log("create portal");

        const portal = new TemplatePortal(this.dropdownMenu, this.viewContainerRef);
        console.log("attach portal");

        this.overlayRef.attach(portal);
        console.log("done");

        this.overlayRef.updatePosition();
      }

    select(option: string) {
        console.log("select - test1");
        this.selectedOption = option;
        // Optional: Dropdown schließen oder Event emitten
    }

    closeDropdown() {
        console.log("close - test1");
        if (this.overlayRef) {
            console.log("close - test2");
            this.overlayRef.dispose();
            this.overlayRef = null;
        }
    }
}
