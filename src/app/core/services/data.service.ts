import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class DataService {

    constructor() { }

    truncateText(text: string, maxLength: number): string {
        if (text.length <= maxLength) {
            return text;
        }
        return text.slice(0, maxLength - 3) + '...';
    }
}
