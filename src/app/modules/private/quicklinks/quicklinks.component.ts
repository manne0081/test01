import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

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
    quicklinkSearchTerm?: string;
    urlPath?: string;

    constructor(
        private privateService: PrivateService,
        private dataService: DataService,
        private router: Router,
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

    removeQuicklinkSearchTerm(): void {
        this.quicklinkSearchTerm = "";
    }

    /**
     *
     * @param node
     */
    toggleQuicklinkGroup(node: Quicklinks) {
        // Version 1 - Alle Gruppen lassen sich auf- oder zuklappen
        // --------------------------------------------------------
        // node.expanded = !node.expanded;

        // Version 2 - Die Gruppe Standard ist immer aufgeklappt,
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

    /**
     *
     * @param event
     * @param parent
     * @returns
     */
    drop(event: CdkDragDrop<Quicklinks[]>, parent: Quicklinks) {
        if (!parent.children) return;
        moveItemInArray(parent.children, event.previousIndex, event.currentIndex);
    }

    /**
     *
     * @param text
     * @returns
     */
    truncateText(text: string) {
        return this.dataService.truncateText(text, 17);
    }

    /**
     *
     * @param quicklink
     */
    openQuicklink(quicklink: Quicklinks): void {
        this.privateService.setSelectedQuicklink(quicklink);

        if (quicklink.value != '/') {
            this.router.navigateByUrl(quicklink.value || "");
        } else {
            console.log(quicklink);
        }
    }

    /**
     *
     * @param item
     */
    openDialog(quicklink: Quicklinks): void {

        const dialogRef = this.dialog.open<Quicklinks, Quicklinks, CdkDialogEditQuicklink>(CdkDialogEditQuicklink, {
            data: { ...quicklink }, // <--- Kopie, nicht das Original!
            hasBackdrop: true,
            panelClass: 'my-dialog-panel',
            backdropClass: 'my-dialog-backdrop',
        });

        dialogRef.closed.subscribe((result: Quicklinks | undefined) => {
            if (result) {
                // Nur wenn gespeichert wurde, die Änderungen übernehmen!
                Object.assign(quicklink, result);
            }
        });


        setTimeout(() => {
            const backdrop = document.querySelector('.cdk-overlay-backdrop') as HTMLElement;
            if (backdrop) {
              Object.assign(backdrop.style, {
                clipPath: 'none',
                transform: 'none',
                display: 'block',
                height: '100vh',
                overflow: 'visible',
              });
            }
          }, 0);



    }
}
