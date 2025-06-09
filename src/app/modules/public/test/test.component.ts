import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

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
    title = 'test01';

    isOpen = false;
}
