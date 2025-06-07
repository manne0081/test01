import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-angular',
    standalone: true,
    imports: [
        RouterModule,
    ],
    templateUrl: './angular.component.html',
    styleUrl: './angular.component.scss'
})

export class AngularComponent {
    title = 'test01';
}
