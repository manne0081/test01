import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class PrivateService {
    // private menuStatus = new BehaviorSubject<string>("expand");
    // menuStatus$ = this.menuStatus.asObservable();

    private isMenuCollapsed = new BehaviorSubject<boolean>(false);

    setIsMenuCollapsed(status: boolean): void {
        console.log("set 1: " + status);
        this.isMenuCollapsed.next(status);
    }

    getIsMenuCollapsed() {
        return this.isMenuCollapsed.asObservable();
    }
}
