import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrivateService } from '../private.service';

@Component({
    selector: 'app-menu',
    standalone: true,
    imports: [
        CommonModule,
    ],
    templateUrl: './menu.component.html',
    styleUrl: './menu.component.scss'
})

export class MenuComponent implements OnInit {
    menuIsCollapsed?: boolean;

    constructor(
        private privateService: PrivateService,
    ) {
        this.privateService.getIsMenuCollapsed().subscribe(data => {
            this.menuIsCollapsed = data;
        });
    }

    ngOnInit(): void {
    }
}
