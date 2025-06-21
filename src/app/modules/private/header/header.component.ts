import { Component, OnInit } from '@angular/core';
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
	templateUrl: './header.component.html',
	styleUrl: './header.component.scss'
})

export class HeaderComponent implements OnInit{
    isMenuCollapsed!:boolean;

    constructor(
        private privateService: PrivateService,
    ) {
        this.privateService.getIsMenuCollapsed().subscribe(data => {
            this.isMenuCollapsed = data;
        });
    }

    ngOnInit(): void {
    }

    toggleMenuStatus(): void {
        this.isMenuCollapsed = !this.isMenuCollapsed;
        this.privateService.setIsMenuCollapsed(this.isMenuCollapsed); // <-- Status an Service senden!
        if (this.isMenuCollapsed) {
            this.privateService.setCookie('isMenuCollapsed', 'true');
        } else {
            this.privateService.setCookie('isMenuCollapsed', 'false');
        }
    }
}
