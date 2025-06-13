import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-dashboard',
    standalone: true,
    imports: [
        CommonModule,
    ],
    templateUrl: './dashboard.component.html',
    styleUrl: './dashboard.component.scss'
})

export class DashboardComponent {
    today: number = Date.now();
    pi: number = 3.14159265359;
    a: number = 0.259;
    b: number = 1.3495;
}
