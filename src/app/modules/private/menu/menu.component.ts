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
    menuItems = [
        { key: 'dashboard', label: 'Dashboard', icon: 'icon-grid' },
        { key: 'workspace', label: 'Workspace', icon: 'icon-box-filled' },
        { key: 'team', label: 'Team', icon: 'icon-group' },
        { key: 'clients', label: 'Kunden', icon: 'icon-building' },
        { key: 'projects', label: 'Projekte', icon: 'icon-cubes' }
    ];
    menuIsCollapsed?: boolean;
    activeMenuItem?: string;

    constructor(
        private privateService: PrivateService,
        private router: Router,
    ) {
        this.privateService.getIsMenuCollapsed().subscribe(data => {
            this.menuIsCollapsed = data;
        });
        // this.privateService.getCurrentRoute().subscribe(data => {
        //     this.activeMenuItem = data;
        // });
    }

    ngOnInit(): void {
        if (!this.activeMenuItem) {
          const url = this.router.url.replace('/', '');
          this.activeMenuItem = url;
        }
    }

    get activeMenuIndex(): number {
        return this.menuItems.findIndex(item => item.key === this.activeMenuItem);
    }

    chooseMenuItem(key: string): void {
        this.activeMenuItem = key;
        this.navigate(key);

        switch (key) {
            case 'dashboard':
                // this.privateService.setBreadcrumbs("Dashboard");
                this.privateService.setIsDashboard(true);
                break;

            case 'clients':
                // this.privateService.setBreadcrumbs("Kunden");
                this.privateService.setIsDashboard(false);
            break;
        }
    }

    navigate(route: string): void {
        this.router.navigate(['/', route]);
    }
}
