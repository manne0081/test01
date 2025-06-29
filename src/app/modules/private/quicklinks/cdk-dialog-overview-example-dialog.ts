import { Component, Inject } from '@angular/core';
import {Dialog, DialogRef, DIALOG_DATA, DialogModule} from '@angular/cdk/dialog';
import {FormsModule} from '@angular/forms';


export interface DialogData {
    animal: string;
    name: string;
}


@Component({
    selector: 'cdk-dialog-overview-example-dialog',
    templateUrl: 'cdk-dialog-overview-example-dialog.html',
    styleUrl: 'cdk-dialog-overview-example-dialog.css',
    standalone: true,
    imports: [FormsModule],
})

export class CdkDialogOverviewExampleDialog {
    constructor(
        public dialogRef: DialogRef<string>,
        @Inject(DIALOG_DATA) public data: DialogData,
    ) {}
}
