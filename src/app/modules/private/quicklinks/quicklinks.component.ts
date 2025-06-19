import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DragDropModule, CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

// import { CdkTreeModule } from '@angular/cdk/tree';

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
        // CdkTreeModule,
    ],
    templateUrl: './quicklinks.component.html',
    styleUrl: './quicklinks.component.scss',

})

export class QuicklinksComponent {
    // quicklinks = Array.from({ length: 30 }, (_, i) => `Quicklink ${i + 1}`);
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
            { name: 'Quicklink 14' },
            { name: 'Quicklink 15' },
            { name: 'Quicklink 16' },
            { name: 'Quicklink 17' },
            { name: 'Quicklink 18' },
            { name: 'Quicklink 19' },
            { name: 'Quicklink 20' },
            { name: 'Quicklink 21' },
            { name: 'Quicklink 22' },
            { name: 'Quicklink 23' },
            { name: 'Quicklink 24' },
            { name: 'Quicklink 25' },
            { name: 'Quicklink 26' },
            { name: 'Quicklink 27' },
            { name: 'Quicklink 28' },
            { name: 'Quicklink 29' },
            { name: 'Quicklink 30' },
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
