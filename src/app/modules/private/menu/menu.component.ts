import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

import { PrivateService } from '../private.service';

@Component({
    selector: 'app-menu',
    standalone: true,
    imports: [
        CommonModule,
        RouterModule,
    ],
    templateUrl: './menu.component.html',
    styleUrl: './menu.component.scss'
})

export class MenuComponent implements OnInit {
    menuIsCollapsed?: boolean;

    constructor(
        private privateService: PrivateService,
        private router: Router,
    ) {
        this.privateService.getIsMenuCollapsed().subscribe(data => {
            this.menuIsCollapsed = data;
        });
    }

    ngOnInit(): void {
    }


    chooseMenuItem(title: string): void {
        this.navigate(title);

        switch (title) {
            case 'dashboard':
                this.privateService.setBreadcrumbs("Dashboard");
                break;
            case 'clients':
                this.privateService.setBreadcrumbs("Kunden");
                break;
        }
    }


    navigate(route: string): void {
        this.router.navigate(['/', route]);
    }
}
