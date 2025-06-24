import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Task, TASK_MOCK } from '../../../../../mock/tasks'
import { PrivateService } from '../../../private.service';
import { DataService } from '../../../../../core/services/data.service';

@Component({
    selector: 'app-task-list',
    standalone: true,
    imports: [
        CommonModule,
    ],
    templateUrl: './task-list.component.html',
    styleUrl: './task-list.component.scss'
})

export class TaskListComponent implements OnInit {
    taskItems: Task[] = [];
    filteredItems: Task[] = [];
    searchTerm: string = '';
    sortingTerm: string = '';
    selectedItemId: number | null = null;

    constructor(
        private privateService: PrivateService,
        private dataService: DataService,
    ) {
        this.taskItems = TASK_MOCK;
        this.filteredItems = this.taskItems;
        this.privateService.getCurrentUrlSearchTerm().subscribe(data => {
            this.searchTerm = data;
            this.filterItems();
        });
        this.privateService.getCurrentUrlSearchTerm().subscribe(data => {
            this.searchTerm = data;
            this.filterItems();
        });
    }

    ngOnInit(): void {
    }

    /**
     * Filtering the items
     */
    filterItems(): void {
        this.filteredItems = this.dataService.filterObjectItems(this.taskItems, this.searchTerm);
    }

    /**
     * Sorting the items
     */
    sortItems(): void {
        this.taskItems = this.dataService.sortListItems(this.taskItems, this.sortingTerm);
    }

    /**
     *
     * @param item
     */
    onSelectTask(event: Event, item: any):void {
        this.selectedItemId = item.id;      // Needed for UI
        this.privateService.setSelectedObject(item);
    }
}
