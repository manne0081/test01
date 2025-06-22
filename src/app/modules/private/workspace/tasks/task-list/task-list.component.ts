import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Task, TASK_MOCK } from '../../../../../mock/tasks'
import { PrivateService } from '../../../private.service';

@Component({
    selector: 'app-task-list',
    standalone: true,
    imports: [
        CommonModule,
    ],
    templateUrl: './task-list.component.html',
    styleUrl: './task-list.component.scss'
})

export class TaskListComponent {
    taskItems: Task[] = [];
    selectedItemId: number | null = null;

    constructor(
        private privateService: PrivateService,
    ) {
        this.taskItems = TASK_MOCK;
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
