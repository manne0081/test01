import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DragDropModule, CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

import {ArrayDataSource} from '@angular/cdk/collections';
import {FlatTreeControl, CdkTreeModule} from '@angular/cdk/tree';

/** Flat node with expandable and level information */
interface ExampleFlatNode {
    expandable: boolean;
    name: string;
    level: number;
    isExpanded?: boolean;
}

const TREE_DATA: ExampleFlatNode[] = [
    {
      name: 'Standard',
      expandable: true,
      level: 0,
    },
    {
        name: 'Quicklink 1',
        expandable: false,
        level: 1,
    },
    {
        name: 'Quicklink 2',
        expandable: false,
        level: 1,
    },
    {
      name: 'Favoriten',
      expandable: true,
      level: 0,
    },
    {
      name: 'Quicklink 3',
      expandable: false,
      level: 1,
    },
    {
      name: 'Quicklink 4',
      expandable: false,
      level: 1,
    },
    {
      name: 'Quicklink 5',
      expandable: false,
      level: 1,
    },
    {
      name: 'Quicklink 6',
      expandable: false,
      level: 1,
    },
];

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

    constructor(
    ) {}



    treeControl = new FlatTreeControl<ExampleFlatNode>(
        node => node.level,
        node => node.expandable,
    );

    dataSource = new ArrayDataSource(TREE_DATA);

    hasChild = (_: number, node: ExampleFlatNode) => node.expandable;

    getParentNode(node: ExampleFlatNode) {
        const nodeIndex = TREE_DATA.indexOf(node);
        for (let i = nodeIndex - 1; i >= 0; i--) {
            if (TREE_DATA[i].level === node.level - 1) {
            return TREE_DATA[i];
            }
        }
        return null;
    }

    shouldRender(node: ExampleFlatNode) {
        let parent = this.getParentNode(node);
        while (parent) {
            if (!parent.isExpanded) {
            return false;
            }
            parent = this.getParentNode(parent);
        }
        return true;
    }

    drop(event: CdkDragDrop<string[]>) {
        moveItemInArray(this.quicklinks, event.previousIndex, event.currentIndex);
    }
}
