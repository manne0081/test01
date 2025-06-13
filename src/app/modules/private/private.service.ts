import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { RoutingService } from "../../core/services/routing.service";
import { CookieService } from 'ngx-cookie-service';

@Injectable({
    providedIn: 'root'
})

export class PrivateService {
    private isMenuCollapsed = new BehaviorSubject<boolean>(false);
    private isQuicklinksVisible = new BehaviorSubject<boolean>(true);
    private isAddInfoVisible = new BehaviorSubject<boolean>(false);
    private breadcrumbs = new BehaviorSubject<string>('Breadcrumbs');

    constructor(
        private routingService: RoutingService,
        private cookieService: CookieService,
    ) {
        // Manage route
        const route: string = this.routingService.getLastSegmentOfCurrentUrl();      // For example: dashboard, client, project incl. parameter
        const trimmedRoute = route.split('?');                                       // splits the route in {object} and {parameter}
        console.log(trimmedRoute[0]);
    }

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

    setBreadcrumbs(title: string): void {
        this.breadcrumbs.next(title);
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

    getBreadcrumbs() {
        return this.breadcrumbs.asObservable();
    }




}
