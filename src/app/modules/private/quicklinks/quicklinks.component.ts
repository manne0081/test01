import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DragDropModule, CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

import {ArrayDataSource} from '@angular/cdk/collections';
import {FlatTreeControl, CdkTreeModule} from '@angular/cdk/tree';

/** Flat node with expandable and level information */
interface TreeNode {
    name: string;
    children?: TreeNode[];
    expanded?: boolean;
}

@Component({
    selector: 'app-quicklinks',
    standalone: true,
    imports: [
        CommonModule,
        FormsModule,
        DragDropModule,
        CdkTreeModule,
    ],
    templateUrl: './quicklinks.component.html',
    styleUrl: './quicklinks.component.scss'
})

export class QuicklinksComponent {
    quicklinks = Array.from({ length: 30 }, (_, i) => `Quicklink ${i + 1}`);
    tree: TreeNode[] = [
        {
          name: 'Standard',
          expanded: true,
          children: [
            { name: 'Quicklink 1' },
            { name: 'Quicklink 2' },
            { name: 'Quicklink 3' },
            { name: 'Quicklink 4' },
          ]
        },
        {
          name: 'Favoriten',
          expanded: true,
          children: [
            { name: 'Quicklink 5' },
            { name: 'Quicklink 6' },
            { name: 'Quicklink 7' },
            { name: 'Quicklink 8' },
            { name: 'Quicklink 9' },
            { name: 'Quicklink 10' },
            { name: 'Quicklink 11' },
            { name: 'Quicklink 12' },
            { name: 'Quicklink 13' },
          ]
        }
    ];

    constructor(
    ) {}

    toggle(node: TreeNode) {
        node.expanded = !node.expanded;
    }

    drop(event: CdkDragDrop<TreeNode[]>, parent: TreeNode) {
        if (!parent.children) return;
        moveItemInArray(parent.children, event.previousIndex, event.currentIndex);
    }
}
