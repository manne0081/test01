import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrivateService } from '../private.service';

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
    ) {
        this.privateService.getSelectedObject().subscribe((data:any) => {
            console.log(data);
            this.addInfoItems = data;
        });
    }
}
