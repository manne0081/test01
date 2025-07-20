import { Component, ElementRef, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { Dialog } from '@angular/cdk/dialog';

import { trigger, transition, style, animate, state } from '@angular/animations';

import { Overlay, OverlayRef, OverlayConfig, FlexibleConnectedPositionStrategy, OverlayPositionBuilder } from '@angular/cdk/overlay';



import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
// import { FilterBuilderComponent } from './query-builder/filter-builder/filter-builder.component';
// import { FilterDialogResult } from './query-builder/filter-builder/filter-builder.component';
import { QuicklinksComponent } from './quicklinks/quicklinks.component';
import { AddInfoComponent } from './add-info/add-info.component';

import { PrivateService } from './private.service';
import { TemplatePortal } from '@angular/cdk/portal';


interface FilterItem {
    id: number | string;
    name: string;
    value: string;
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
        // FilterBuilderComponent,
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

    private lastRoute?: string;         // Use this to clear the filterItemArray by path changing

    filterItems: FilterItem[] = [
    ];

    private overlayRef: OverlayRef | null = null;

    constructor(
        private router: Router,
        private dialog: Dialog,
        private overlay: Overlay,
        private overlayPositionBuilder: OverlayPositionBuilder,
        private vcr: ViewContainerRef,
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
        if (this.searchTerm) {
            this.filterItems.push({ id: 'searchTerm', name: 'Suche: ', value: this.searchTerm });
        }

        this.privateService.getCurrentUrlPath().subscribe(data => {
            if (this.lastRoute !== undefined && this.lastRoute !== data) {
                this.filterItems = [];          // Nur wenn der Pfad sich wirklich geändert hat:
            }
            this.lastRoute = data;              // Aktuellen Pfad merken
        });

        this.privateService.getCurrentUrlSearchTerm().subscribe(data => {
            // console.log(data);
            if(this.searchTerm) {
                this.filterItems = this.filterItems.filter(item => item.id !== 'searchTerm');
                this.filterItems.push({ id: 'searchTerm', name: 'Suche: ', value: data });
            }
        });
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

        // Suche das Filter-Item mit id 'searchTerm'
        let searchTermItem = this.filterItems.find(item => item.id === 'searchTerm');

        if (!searchTermItem && searchTerm.length > 0) {
            // Noch kein Filter-Item vorhanden und mindestens ein Zeichen eingegeben -> anlegen
            this.filterItems.push({ id: 'searchTerm', name: 'Suche: ', value: searchTerm });
        } else if (searchTermItem) {
            // Filter-Item existiert -> Wert aktualisieren
            searchTermItem.value = searchTerm;
            // Optional: Wenn Eingabe wieder leer ist, Filter-Item entfernen
            if (searchTerm.length === 0) {
                this.filterItems = this.filterItems.filter(item => item.id !== 'searchTerm');
            }
        }

        // comment
        // maybe its better to use this syntax for quicklinks
        // this.filterItems.push({ id: 0, name: 'searchTerm', value: searchTerm });

    }

    /**
     * removes the searching-term and the additional-informations
     */
    removeSearchTerm(): void {
        this.searchTerm = '';
        this.filterItems = this.filterItems.filter(item => item.id !== 'searchTerm');
        this.updateRoute();
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






    // openFilterBuilder(): void {
    //     // this.dialog.open(FilterBuilderComponent, {
    //     //     width: '600px',
    //     // });

    //     const dialogRef = this.dialog.open<FilterDialogResult>(FilterBuilderComponent, {
    //         hasBackdrop: false
    //     });

    //     dialogRef.closed.subscribe(result => {
    //         if (result) {
    //             console.log(result.filter);
    //         }
    //     });
    // }


    openFilterOverlay(trigger: HTMLElement, template: TemplateRef<any>) {
        console.log(trigger);

        const positionStrategy = this.overlayPositionBuilder
            .flexibleConnectedTo(trigger)
            .withPositions([
                {
                    originX: 'end',
                    originY: 'bottom',
                    overlayX: 'end',
                    overlayY: 'top',
                },

            ]);

        const overlayConfig = new OverlayConfig({
            hasBackdrop: false,
            positionStrategy,
            scrollStrategy: this.overlay.scrollStrategies.reposition()
        });

        this.overlayRef = this.overlay.create(overlayConfig);
        this.overlayRef.attach(new TemplatePortal(template, this.vcr));
    }

    closeOverlay() {
        this.overlayRef?.dispose();
    }






    toggelFilter(): void {
        if (this.filterItems.length > 0) {
            this.filterItems = [];
        } else {
            this.filterItems = [
                { id: 0, name: 'Searching: ', value: "WIP" },
                { id: 1, name: 'Fieldname: ', value: "WIP" },
                { id: 2, name: 'Fieldname: ', value: "WIP" },
            ];
        }
    }
}
