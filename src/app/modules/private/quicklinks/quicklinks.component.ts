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
            { name: 'Leaf 1' },
            { name: 'Leaf 2' },
            { name: 'Leaf 3' },
            { name: 'Leaf 4' },
          ]
        },
        {
          name: 'Favoriten',
          expanded: true,
          children: [
            { name: 'Leaf 5' },
            { name: 'Leaf 6' },
            { name: 'Leaf 7' },
            { name: 'Leaf 8' },
            { name: 'Leaf 9' },
            { name: 'Leaf 10' },
            { name: 'Leaf 11' },
            { name: 'Leaf 12' },
            { name: 'Leaf 13' },
          ]
        }
    ];

    constructor(
    ) {}

    drop(event: CdkDragDrop<string[]>) {
        moveItemInArray(this.quicklinks, event.previousIndex, event.currentIndex);
    }

    toggle(node: TreeNode) {
        node.expanded = !node.expanded;
    }

    drop2(event: CdkDragDrop<TreeNode[]>, parent: TreeNode) {
        if (!parent.children) return;
        moveItemInArray(parent.children, event.previousIndex, event.currentIndex);
    }
}
