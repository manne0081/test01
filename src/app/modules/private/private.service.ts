import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { RoutingService } from "../../core/services/routing.service";
import { CookieService } from 'ngx-cookie-service';
import { RouteTrackerService } from "../../core/services/route-tracker.service";
// import { RouteTrackerService } from "../../core/services/route-tracker.service";

@Injectable({
    providedIn: 'root'
})

export class PrivateService {
    private isMenuCollapsed = new BehaviorSubject<boolean>(false);
    private isDashboard = new BehaviorSubject<boolean>(true);
    private currentRoute = new BehaviorSubject<string>('');
    private isQuicklinksVisible = new BehaviorSubject<boolean>(true);
    private isAddInfoVisible = new BehaviorSubject<boolean>(false);
    private breadcrumbs = new BehaviorSubject<string>('Breadcrumbs');

    // todo
    // What i have to save in cookies
    // - isMenuCollapsed
    // - isQuicklinksVisible
    // - isAddInfoVisible

    constructor(
        private routeTracker: RouteTrackerService,
        private cookieService: CookieService,
    ) {
        this.routeTracker.currentUrl$.subscribe(url => {
            console.log('currentUrl: ', url);
            this.currentRoute.next(url);

            switch (url) {
                case '/clients':
                    this.setBreadcrumbs('Kunden');
                    break;
                case '/team':
                    this.setBreadcrumbs('Team');
                    break;
            }


        });
    }

    // SETTER
    // ++++++
    setIsMenuCollapsed(status: boolean): void {
        this.isMenuCollapsed.next(status);
    }


    setIsDashboard(isDashboard: boolean): void {
        this.isDashboard.next(isDashboard);
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

    // Set Cookie => With or Without duration
    setCookie(cookieName: string, cookieValue: string, duration?: number) {
        if (duration) {
            this.cookieService.set(cookieName, cookieValue, duration);
        } else {
            this.cookieService.set(cookieName, cookieValue);
        }
    }

    // GETTER
    // ++++++
    getCurrentRoute() {
        return this.currentRoute.asObservable();
    }

    getIsMenuCollapsed() {
        return this.isMenuCollapsed.asObservable();
    }

    getisDashboard() {
        return this.isDashboard.asObservable();
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

    /**
     * Possible cookies: 'isAddInfoAreaVisible', 'isQuicklinkAreaVisible'
     * @param cookieName
     * @returns
     */
    getCookie(cookieName: string) {
        return this.cookieService.get(cookieName);
    }



    // Delete Cookie
    deleteCookie(cookieName: string) {
        this.cookieService.delete(cookieName);
    }
}
