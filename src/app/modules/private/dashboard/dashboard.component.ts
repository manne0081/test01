import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { OverlayModule } from '@angular/cdk/overlay';
import { PortalModule } from '@angular/cdk/portal';
import { Dialog, DialogModule } from '@angular/cdk/dialog';

import { CdkDialogStylingExample } from './cdk-dialog-overview-example-dialog';

@Component({
    selector: 'app-dashboard',
    standalone: true,
    imports: [
        CommonModule,
        FormsModule,
        OverlayModule,
        PortalModule,
        DialogModule,
    ],
    templateUrl: './dashboard.component.html',
    styleUrl: './dashboard.component.scss'
})

export class DashboardComponent {
    today: number = Date.now();
    pi: number = 3.14159265359;
    a: number = 0.259;
    b: number = 1.3495;

    constructor(
        public dialog: Dialog,
    ){}

    openDialog(text: string): void {
        this.dialog.open<string>(CdkDialogStylingExample);
    }
}
