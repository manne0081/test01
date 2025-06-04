import { Component, OnInit } from '@angular/core';
import { PrivateService } from '../private.service';

@Component({
    selector: 'app-menu',
    standalone: true,
    imports: [
    ],
    providers: [
        PrivateService,
    ],
    templateUrl: './menu.component.html',
    styleUrl: './menu.component.scss'
})

export class MenuComponent implements OnInit {
    isMenuCollapsed:any;

    constructor(
        private privateService: PrivateService,
    ) {
        console.log("MenuComponent constructed");
        this.privateService.test$.subscribe(data => {
            console.log("get 1: ", data);
            this.isMenuCollapsed = data;
        });

        this.privateService.getIsMenuCollapsed().subscribe(data => {
            console.log("get 2: ", data);
        });
    }

    ngOnInit(): void {
        console.log("MenuComponent initialized");
        this.privateService.test2();
    }
}
