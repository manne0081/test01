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
        { key: 'partner', label: 'Partner', icon: 'icon-building' },
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
        this.privateService.getCurrentRoute().subscribe(data => {
            console.log('route', data);
            if (data == '/tasks' || data == '/calendar' || data == '/messages') {
                this.activeMenuItem = 'workspace';
            }
            if (data == '/employee') {
                this.activeMenuItem = 'team';
            }
            if (data == '/clients') {
                this.activeMenuItem = 'partner';
            }
        });
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

        switch (key) {
            case 'dashboard':
                this.privateService.setIsDashboard(true);
                this.navigate(key);
                break;

            case 'workspace':
                this.navigate('tasks');
                this.privateService.setIsDashboard(false);
                break;

            case 'team':
                this.navigate('employee');
                this.privateService.setIsDashboard(false);
            break;

            case 'partner':
                this.navigate('clients');
                this.privateService.setIsDashboard(false);
            break;

            case 'projects':
                this.navigate(key);
                this.privateService.setIsDashboard(false);
            break;
        }
    }

    navigate(route: string): void {
        console.log('setRoute: ', route);
        this.router.navigate(['/', route]);
    }
}
