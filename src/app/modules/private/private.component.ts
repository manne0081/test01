import { Component } from '@angular/core';

import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { QuicklinksComponent } from './quicklinks/quicklinks.component';
import { PrivateService } from './private.service';

@Component({
    selector: 'app-private',
    standalone: true,
    imports: [
        CommonModule,
        RouterModule,
        HeaderComponent,
        MenuComponent,
        QuicklinksComponent,
    ],
    templateUrl: './private.component.html',
    styleUrl: './private.component.scss'
})

export class PrivateComponent {
    isQuicklinksVisible?: boolean;
    isAddInfoVisible?: boolean;

    constructor(
        private privateService: PrivateService,
    ) {
        this.privateService.getIsQuicklinksVisible().subscribe(data => {
            this.isQuicklinksVisible = data;
        });
        this.privateService.getIsAddInfoVisible().subscribe(data => {
            this.isAddInfoVisible = data;
        });
    }

    toggleQuicklinks(): void {
        this.isQuicklinksVisible = !this.isQuicklinksVisible;
        this.privateService.setIsQuicklinksVisible(this.isQuicklinksVisible);
    }

    toggleAddInfo(): void {
        this.isAddInfoVisible = !this.isAddInfoVisible;
        this.privateService.setIsAddInfoVisible(this.isAddInfoVisible);
    }
}
