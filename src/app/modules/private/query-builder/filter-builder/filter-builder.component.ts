import { Component } from '@angular/core';
import { DialogRef } from '@angular/cdk/dialog';

export interface FilterDialogResult {
    filter: any; // oder z.B. filter: any;
}

@Component({
    selector: 'app-filter-builder',
    standalone: true,
    imports: [],
    templateUrl: './filter-builder.component.html',
    styleUrl: './filter-builder.component.scss'
})

export class FilterBuilderComponent {
    currentFilter: any = {
        field: 'customerName',
        operator: 'contains',
        value: 'Müller',
        logic: 'AND',
        conditions: [
            {
                field: 'status',
                operator: 'equals',
                value: 'active'
            },
            {
                field: 'city',
                operator: 'startsWith',
                value: 'Berlin'
            }
        ]
    };

    constructor(
        private dialogRef: DialogRef<FilterDialogResult>
    ) { }

    close() {
        this.dialogRef.close({ filter: this.currentFilter });
    }

}
