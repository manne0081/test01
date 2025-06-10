import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class PrivateService {
    private isMenuCollapsed = new BehaviorSubject<boolean>(false);
    private isQuicklinksVisible = new BehaviorSubject<boolean>(true);
    private isAddInfoVisible = new BehaviorSubject<boolean>(false);

    // SETTER
    // ++++++
    setIsMenuCollapsed(status: boolean): void {
        this.isMenuCollapsed.next(status);
    }

    setIsQuicklinksVisible(status: boolean): void {
        this.isQuicklinksVisible.next(status);
    }

    setIsAddInfoVisible(status: boolean): void {
        this.isAddInfoVisible.next(status);
    }

    // GETTER
    // ++++++
    getIsMenuCollapsed() {
        return this.isMenuCollapsed.asObservable();
    }

    getIsQuicklinksVisible() {
        return this.isQuicklinksVisible.asObservable();
    }

    getIsAddInfoVisible() {
        return this.isAddInfoVisible.asObservable();
    }






}
