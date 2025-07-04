import { Component, Input, Output, EventEmitter, HostListener, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';
import { Quicklinks } from '../../../mock/quicklinks';
import { RouteTrackerService } from '../../../core/services/route-tracker.service';

// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
    selector: 'cdk-dialog-edit-quicklink',
    standalone: true,
    imports: [
        CommonModule,
        FormsModule,
        // BrowserAnimationsModule,
    ],
    templateUrl: './dialog-edit-quicklink.html',
    styleUrls: ['./dialog-edit-quicklink.scss'],
})

export class CdkDialogEditQuicklink {
    @Input() initialValue = '';
    quicklinkToEdit?: Quicklinks;

    constructor(
        @Inject(DIALOG_DATA) public data: any,
        public dialogRef: DialogRef,
        private routeTracker: RouteTrackerService,
    ) {
        this.quicklinkToEdit = data;
    }

    addHost(path: string): string {
        return 'http://localhost:4402' + path;
    }

    save() {
        this.dialogRef.close(this.quicklinkToEdit);
    }

    refreshUrl(): void {
        this.routeTracker.getAngularUrl().subscribe(data => {
            if(this.quicklinkToEdit) {
                this.quicklinkToEdit.value = data;
            }
        });
    }
}
