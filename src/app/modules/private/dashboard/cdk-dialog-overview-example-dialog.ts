import { Component, Input, Output, EventEmitter, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DialogRef } from '@angular/cdk/dialog';

@Component({
    selector: 'cdk-dialog-styling-example',
    standalone: true,
    imports: [CommonModule, FormsModule],
    templateUrl: './cdk-dialog-overview-example-dialog.html',
    styleUrls: ['./cdk-dialog-overview-example-dialog.css'],
})

export class CdkDialogStylingExample {
    @Input() initialValue = '';
    // @Output() closed = new EventEmitter<string | null>();

    // value = '';
    // dialogRef: any;

    constructor(
        public dialogRef: DialogRef
    ) {}

}
