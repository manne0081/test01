import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { CookieService } from 'ngx-cookie-service';
import { RouteTrackerService } from "../../core/services/route-tracker.service";
import { TestBed } from '@angular/core/testing';
import { Quicklinks } from "../../mock/quicklinks";
// import { RouteTrackerService } from "../../core/services/route-tracker.service";

@Injectable({
    providedIn: 'root'
})

export class PrivateService {
    private currentUrlPath = new BehaviorSubject<string>('');
    private currentUrlSearchTerm = new BehaviorSubject<string>('');
    private currentUrlSortTerm = new BehaviorSubject<string>('');
    private isMenuCollapsed = new BehaviorSubject<boolean>(false);
    private isDashboard = new BehaviorSubject<boolean | undefined>(undefined);
    private isQuicklinksVisible = new BehaviorSubject<boolean>(true);
    private isAddInfoVisible = new BehaviorSubject<boolean>(false);
    private breadcrumbs = new BehaviorSubject<string>('Breadcrumbs');
    private selectedObject = new BehaviorSubject<any>('');
    private selectedQuicklink = new BehaviorSubject<Quicklinks | undefined>(undefined);

    constructor(
        private routeTracker: RouteTrackerService,
        private cookieService: CookieService,
    ) {
        // Manage visibility
        const cookieIsQuicklinksVisible: string = this.cookieService.get('isQuicklinksVisible');
        const cookieIsAddInfoVisible: string = this.getCookie('isAddInfoVisible');
        const cookieIsMenuCollapsed: string = this.getCookie('isMenuCollapsed');

        // Track current URL by RouteTrackerService
        // For setting some Variables after refreshing the app
        // ****************************************************
        this.routeTracker.getUrlPath().subscribe(url => {

            this.routeTracker.getUrlPath().subscribe(data => {
                this.currentUrlPath.next(data);
            });
            this.routeTracker.getUrlSearchTerm().subscribe(data => {
                this.currentUrlSearchTerm.next(data);

            });
            this.routeTracker.getUrlSortTerm().subscribe(data => {
                this.currentUrlSortTerm.next(data);
            });

            switch (url) {
                case 'dashboard':
                    this.setIsDashboard(true);
                    break;
                case 'tasks':
                    this.setIsDashboard(false);
                    this.setBreadcrumbs('Workspace > Aufgaben');
                    break;
                case 'calendar':
                    this.setIsDashboard(false);
                    this.setBreadcrumbs('Workspace > Kalender');
                    break;
                case 'messages':
                    this.setIsDashboard(false);
                    this.setBreadcrumbs('Workspace > Nachrichten');
                    break;
                case 'employee':
                    this.setIsDashboard(false);
                    this.setBreadcrumbs('Team > Mitarbeiter');
                    break;
                case 'clients':
                    this.setIsDashboard(false);
                    this.setBreadcrumbs('Partner > Kunden');
                    break;
                case 'projects':
                    this.setIsDashboard(false);
                    this.setBreadcrumbs('Projekte');
                    break;
            }
        });

        // Show or hide Quicklinks by cookie
        // *********************************
        if (cookieIsQuicklinksVisible === 'true') {
            this.setIsQuicklinksVisible(true);
        } else {
            this.setIsQuicklinksVisible(false);
        }

        // Show or hide AddInfos by cookie
        // *********************************
        if (cookieIsAddInfoVisible === 'true') {
            this.setIsAddInfoVisible(true);
        } else {
            this.setIsAddInfoVisible(false);
        }

        // Show expanded or collapsed menu by cookie
        // *****************************************
        if (cookieIsMenuCollapsed === 'true') {
            this.setIsMenuCollapsed(true);
        } else {
            this.setIsMenuCollapsed(false);
        }
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
        this.selectedObject.next('');
    }

    setSelectedObject(selectedObject: any): void {
        this.selectedObject.next(selectedObject);
    }

    setSelectedQuicklink(selectedQuicklink: Quicklinks): void {
        this.selectedQuicklink.next(selectedQuicklink);
    }

    /**
     * Set Cookie => With or Without duration
     * @param cookieName
     * @param cookieValue
     * @param duration
     */
    setCookie(cookieName: string, cookieValue: string, duration?: number) {
        if (duration) {
            this.cookieService.set(cookieName, cookieValue, duration);
        } else {
            const expires = new Date('2099-12-31T23:59:59');
            // console.log(expires.toUTCString());
            this.cookieService.set(cookieName, cookieValue);
            // this.cookieService.set(cookieName, cookieValue, expires, '/');
        }
    }

    // GETTER
    // ++++++
    getCurrentUrlPath() {
        return this.currentUrlPath.asObservable();
    }

    getCurrentUrlSearchTerm() {
        return this.currentUrlSearchTerm.asObservable();
    }

    getCurrentUrlSortTerm() {
        return this.currentUrlSortTerm.asObservable();
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

    getSelectedObject(): any {
        return this.selectedObject.asObservable();
    }

    getSelectedQuicklink() {
        return this.selectedQuicklink.asObservable();
    }

    /**
     * Possible cookies: 'isAddInfoVisible', 'isQuicklinkVisible, isMenuCollapsed'
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
