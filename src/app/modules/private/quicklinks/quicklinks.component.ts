import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DragDropModule, CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Dialog, DialogRef, DIALOG_DATA, DialogModule } from '@angular/cdk/dialog';

import { DataService } from '../../../core/services/data.service';

import { Quicklinks, QUICKLINKS_MOCK } from '../../../mock/quicklinks';
import { PrivateService } from '../private.service';
import { CdkDialogOverviewExampleDialog } from './cdk-dialog-overview-example-dialog';

export interface DialogData {
    animal: string;
    name: string;
}


@Component
    ({
    selector: 'app-quicklinks',
    standalone: true,
    imports: [
        CommonModule,
        FormsModule,
        DragDropModule,
        CdkDialogOverviewExampleDialog,
    ],
    templateUrl: './quicklinks.component.html',
    styleUrl: './quicklinks.component.scss',
})

export class QuicklinksComponent implements OnInit {
    quicklinkItems: Quicklinks[] = [];
    urlPath?: string;

    animal: string | undefined;
    name?: string;

    constructor(
        private privateService: PrivateService,
        private dataService: DataService,
        public dialog: Dialog,
    ) {
        this.quicklinkItems = QUICKLINKS_MOCK;
    }

    ngOnInit(): void {
        this.privateService.getCurrentUrlPath().subscribe(data => {
            this.urlPath = data;

            this.quicklinkItems.forEach(branch => {
                if (branch.name === 'Standard') {
                    branch.expanded = true;
                } else {
                    branch.expanded = false;

                    switch (`${branch.name}|${this.urlPath}`) {
                        case 'Workspace|tasks':
                            branch.expanded = true;
                            break;
                        case 'Workspace|messages':
                            branch.expanded = true;
                            break;
                        case 'Workspace|calendar':
                            branch.expanded = true;
                            break;

                        case 'Team|employee':
                            branch.expanded = true;
                            break;

                        case 'Partner|clients':
                            branch.expanded = true;
                            break;

                        case 'Projekte|projects':
                            branch.expanded = true;
                            break;
                    }
                }
            });
        });
    }

    toggle(node: Quicklinks) {
        // Alle Gruppen lassen sich auf- oder zuklappen
        // --------------------------------------------
        // node.expanded = !node.expanded;

        // Die Gruppe Standard ist immer aufgeklappt,
        // von den weiteren lässt sich immer nur eine Gruppe aufklappen
        // ------------------------------------------------------------
        let urlPath: string;
        if (node.name != 'Standard') {
            this.quicklinkItems.forEach(branch => {
                if (branch.name === 'Standard') {
                    branch.expanded = true;
                } else {
                    branch.expanded = (branch === node) ? !branch.expanded : false;
                }
            });
        }
    }

    drop(event: CdkDragDrop<Quicklinks[]>, parent: Quicklinks) {
        if (!parent.children) return;
        moveItemInArray(parent.children, event.previousIndex, event.currentIndex);
    }

    truncateText(text: string) {
        return this.dataService.truncateText(text, 16);
    }

    openDialog(): void {
        console.log('open dialog...');

        const dialogRef = this.dialog.open<string>(CdkDialogOverviewExampleDialog, {
          width: '250px',
          data: {name: this.name, animal: this.animal},
        });

        dialogRef.closed.subscribe(result => {
          console.log('The dialog was closed');
          this.animal = result;
        });
    }

}
