import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

import {OverlayModule} from '@angular/cdk/overlay';

@Component({
    selector: 'app-test',
    standalone: true,
    imports: [
        CommonModule,
        RouterModule,
        OverlayModule,
    ],
    templateUrl: './test.component.html',
    // styleUrl: './test.component.scss',
    styleUrls: ['./test.component.scss']
  })

export class TestComponent {
    buttonTitle = 'Bitte wählen...';
    isOpen = false;

    constructor(private router: Router) {}

    chooseOption(title: string): void {
        this.buttonTitle = title;
        this.isOpen = false;

        switch (title) {
            case 'dashboard':
                this.routeOption('dashboard');
                break;
            case 'home':
                this.routeOption('home');
                break;
            default:

        }
    }

    routeOption(route: string): void {
        this.router.navigate(['/', route]);
    }
}
