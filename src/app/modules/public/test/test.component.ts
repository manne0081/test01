import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../../private/header/header.component';
import { MenuComponent } from '../../private/menu/menu.component';

@Component({
    selector: 'app-test',
    standalone: true,
    imports: [
        RouterModule,
        HeaderComponent,
        MenuComponent,
    ],
    templateUrl: './test.component.html',
    styleUrl: './test.component.scss'
  })

export class TestComponent {
    title = 'test01';
}
