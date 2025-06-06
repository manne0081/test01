import { Component } from '@angular/core';

import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-private',
    standalone: true,
    imports: [
        RouterModule,
        HeaderComponent,
        MenuComponent,
    ],
    templateUrl: './private.component.html',
    styleUrl: './private.component.scss'
})

export class PrivateComponent {

}
