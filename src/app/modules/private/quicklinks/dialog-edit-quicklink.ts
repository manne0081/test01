import { Component, Input, Output, EventEmitter, HostListener, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';
import { Quicklinks } from '../../../mock/quicklinks';

@Component({
    selector: 'cdk-dialog-edit-quicklink',
    standalone: true,
    imports: [CommonModule, FormsModule],
    templateUrl: './dialog-edit-quicklink.html',
    styleUrls: ['./dialog-edit-quicklink.scss'],
})

export class CdkDialogEditQuicklink {
    @Input() initialValue = '';
    // @Output() closed = new EventEmitter<string | null>();

    quicklinkToEdit?: Quicklinks;

    constructor(
        public dialogRef: DialogRef,
        @Inject(DIALOG_DATA) public data: any
    ) {
        this.quicklinkToEdit = data;
        console.log(data.name);
    }

}
