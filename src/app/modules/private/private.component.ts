import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';

import { trigger, transition, style, animate, state } from '@angular/animations';

import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { QuicklinksComponent } from './quicklinks/quicklinks.component';
import { AddInfoComponent } from './add-info/add-info.component';

import { PrivateService } from './private.service';

interface FilterItem {
    id: number | string;
    name: string;
}

@Component({
    selector: 'app-private',
    standalone: true,
    imports: [
        CommonModule,
        FormsModule,
        RouterModule,
        HeaderComponent,
        MenuComponent,
        QuicklinksComponent,
        AddInfoComponent,
    ],
    templateUrl: './private.component.html',
    styleUrl: './private.component.scss',
    animations: [
        trigger('fadeInOut-left', [
            transition(':enter', [
              style({ opacity: 0, transform: 'translateX(-10px)', width: '0px' }),
              animate('250ms ease-out', style({ opacity: 1, transform: 'translateX(0)', width: '*' }))
            ]),
            transition(':leave', [
              animate('250ms ease-in', style({ opacity: 0, transform: 'translateX(-10px)', width: '0px' }))
            ])
        ]),
        trigger('fadeInOut-right', [
            transition(':enter', [
              style({ opacity: 0, transform: 'translateX(10px)', width: '0px' }),
              animate('250ms ease-out', style({ opacity: 1, transform: 'translateX(0)', width: '*' }))
            ]),
            transition(':leave', [
              animate('250ms ease-in', style({ opacity: 0, transform: 'translateX(10px)', width: '0px' }))
            ])
        ]),
    ]
})

export class PrivateComponent implements OnInit {
    currentRoute?: string;
    isDashbaord?: boolean;
    isQuicklinksVisible?: boolean;
    isAddInfoVisible?: boolean;
    breadcrumbs!: string;
    searchTerm: string = '';
    sortingTerm: string = '';

    activeFilterItems: FilterItem[] = [
        // { id: 0, name: 'wip-1' },
    ];

    constructor(
        private router: Router,
        private privateService: PrivateService,
    ) {
        this.privateService.getCurrentUrlPath().subscribe(data => {
            this.currentRoute = data;
        });
        this.privateService.getCurrentUrlSearchTerm().subscribe(data => {
            this.searchTerm = data;
        });
        this.privateService.getisDashboard().subscribe(data => {
            this.isDashbaord = data;
        });
        this.privateService.getIsQuicklinksVisible().subscribe(data => {
            this.isQuicklinksVisible = data;
        });
        this.privateService.getIsAddInfoVisible().subscribe(data => {
            this.isAddInfoVisible = data;
        });
        this.privateService.getBreadcrumbs().subscribe(data => {
            this.breadcrumbs = data;
        });
    }

    ngOnInit(): void {

    }

    toggleQuicklinks(): void {
        this.isQuicklinksVisible = !this.isQuicklinksVisible;
        this.privateService.setIsQuicklinksVisible(this.isQuicklinksVisible);
        if (this.isQuicklinksVisible) {
            this.privateService.setCookie('isQuicklinksVisible', 'true');
        } else {
            this.privateService.setCookie('isQuicklinksVisible', 'false');
        }
    }

    toggleAddInfo(): void {
        this.isAddInfoVisible = !this.isAddInfoVisible;
        this.privateService.setIsAddInfoVisible(this.isAddInfoVisible);
        if (this.isAddInfoVisible) {
            this.privateService.setCookie('isAddInfoVisible', 'true');
        } else {
            this.privateService.setCookie('isAddInfoVisible', 'false');
        }
    }

    /**
     * Will be triggert by keyup -> Make two things
     * 1. Add little filter-chips for UI
     * 2. Add parameter to url -> the object-list subscibes the url and reads the parameter
     * @param event
     */
    onSearchTermChanged(event: Event) {
        this.addSearchTerm(event);
        this.updateRoute();
    }

    /**
     * Add new searchTerms to show these as little chips
     * @param event
     */
    addSearchTerm(event: Event): void {
        const inputElement = event.target as HTMLInputElement;
        const searchTerm = inputElement.value.trim();
        const searchTermItem = this.activeFilterItems.find(item => item.id === 'searchTerm');

        // todo
        // little chips to show all filter items
    }

    /**
     * Change the route, so you can set this as quicklink
     */
    updateRoute(): void {
        // console.log('Navigating with:', {
        //     searchTerm: this.searchTerm,
        //     sortingTerm: this.sortingTerm
        // });

        this.router.navigate([], {
            queryParams: { search: this.searchTerm, sort: this.sortingTerm },
            queryParamsHandling: 'merge',
        }).then(success => {
            if (success) {
                // console.log('Navigation successful');
            } else {
                // console.log('Navigation failed');
            }
        });
    }
}
