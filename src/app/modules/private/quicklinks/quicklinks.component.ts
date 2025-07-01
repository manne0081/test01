import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DragDropModule, CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

import { DataService } from '../../../core/services/data.service';

import { Quicklinks, QUICKLINKS_MOCK } from '../../../mock/quicklinks';
import { PrivateService } from '../private.service';
import { Dialog } from '@angular/cdk/dialog';
import { CdkDialogEditQuicklink } from './dialog-edit-quicklink';

@Component
    ({
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

export class QuicklinksComponent implements OnInit {
    quicklinkItems: Quicklinks[] = [];
    urlPath?: string;

    constructor(
        private privateService: PrivateService,
        private dataService: DataService,
        public dialog: Dialog,
    ) {
        this.quicklinkItems = QUICKLINKS_MOCK;

        // this.overlayRef.backdropClick().subscribe((event: MouseEvent) => {
        //     this.closeDialog();
        // });

    }

    closeDialog() {
        console.log('close dialog...');
        // this.overlayRef.dispose(); // oder .detach(), je nach gewünschtem Verhalten
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


    /**
     *
     */
    openDialog(item: any): void {
        console.log(item);
        // this.dialog.open<string>(CdkDialogEditQuicklink);
        this.dialog.open(CdkDialogEditQuicklink, {
            data: item    // <--- Hier wird das Objekt übergeben
        });
    }

}
