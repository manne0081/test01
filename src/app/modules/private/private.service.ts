import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class PrivateService {
    private isMenuCollapsed = new BehaviorSubject<boolean>(false);

    setIsMenuCollapsed(status: boolean): void {
        this.isMenuCollapsed.next(status);
    }

    getIsMenuCollapsed() {
        return this.isMenuCollapsed.asObservable();
    }
}
