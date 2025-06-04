import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PrivateService } from '../private.service';
import { CommonModule } from '@angular/common';

@Component({
	selector: 'app-header',
	standalone: true,
	imports: [
        CommonModule,
		RouterModule,
	],
    providers: [
        PrivateService,
    ],
	templateUrl: './header.component.html',
	styleUrl: './header.component.scss'
})

export class HeaderComponent {
    menuIsCollapsed!:boolean;

    constructor(
        private privateService: PrivateService,
    ) {}

    toggleMenuStatus(): void {
        this.menuIsCollapsed = !this.menuIsCollapsed;
        this.privateService.setIsMenuCollapsed(this.menuIsCollapsed);

        this.privateService.test2();

    }
}
