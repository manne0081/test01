import { Component } from '@angular/core';

import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';

@Component({
    selector: 'app-private',
    standalone: true,
    imports: [
        HeaderComponent,
        MenuComponent,
    ],
    templateUrl: './private.component.html',
    styleUrl: './private.component.scss'
})

export class PrivateComponent {

}
