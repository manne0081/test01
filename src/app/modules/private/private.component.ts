import { Component } from '@angular/core';

import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { QuicklinksComponent } from './quicklinks/quicklinks.component';

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

}
