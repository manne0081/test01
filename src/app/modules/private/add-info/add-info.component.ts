import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrivateService } from '../private.service';
import { DataService } from '../../../core/services/data.service';
import { max } from 'rxjs';

@Component({
    selector: 'app-add-info',
    standalone: true,
    imports: [
        CommonModule,
    ],
    templateUrl: './add-info.component.html',
    styleUrl: './add-info.component.scss'
})

export class AddInfoComponent {
    addInfoItems: any = '';

    constructor(
        private privateService: PrivateService,
        private dataService: DataService,
    ) {
        this.privateService.getSelectedObject().subscribe((data:any) => {
            // console.log(data);
            this.addInfoItems = data;
        });
    }

    truncateText(text: string, maxLength: number): string {
        return this.dataService.truncateText(text, maxLength);
    }
}
