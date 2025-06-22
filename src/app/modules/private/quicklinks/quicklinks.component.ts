import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DragDropModule, CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

import { Quicklinks, QUICKLINKS_MOCK } from '../../../mock/quicklinks';

@Component({
    selector: 'app-quicklinks',
    standalone: true,
    imports: [
        CommonModule,
        FormsModule,
        DragDropModule,
    ],
    templateUrl: './quicklinks.component.html',
    styleUrl: './quicklinks.component.scss',

})

export class QuicklinksComponent {
    quicklinkItems: Quicklinks[] = [];

    constructor(
    ) {
        this.quicklinkItems = QUICKLINKS_MOCK;
    }

    toggle(node: Quicklinks) {
        node.expanded = !node.expanded;
    }

    drop(event: CdkDragDrop<Quicklinks[]>, parent: Quicklinks) {
        if (!parent.children) return;
        moveItemInArray(parent.children, event.previousIndex, event.currentIndex);
    }
}
