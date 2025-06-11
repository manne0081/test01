import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-clients',
    standalone: true,
    imports: [
        CommonModule,
    ],
    templateUrl: './clients.component.html',
    styleUrl: './clients.component.scss'
})

export class ClientsComponent {
    today: number = Date.now();
    pi: number = 3.14159265359;
    a: number = 0.259;
    b: number = 1.3495;
}
