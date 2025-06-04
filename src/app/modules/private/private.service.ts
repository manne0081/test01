import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class PrivateService {
    private test = new BehaviorSubject<boolean>(false);
    test$ = this.test.asObservable();

    private isMenuCollapsed = new BehaviorSubject<any>(undefined);


    setIsMenuCollapsed(status: boolean): void {
        console.log("set 1: " + status);
        this.isMenuCollapsed.next(status);

        console.log("set 2: " + status);
        this.test.next(status);
    }

    getIsMenuCollapsed() {
        return this.isMenuCollapsed.asObservable();
    }

    test2(): void {
        console.log("test 1: ", this.test.getValue());
        console.log("test 2: ", this.isMenuCollapsed.getValue());
    }
}
