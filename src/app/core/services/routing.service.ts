import { Injectable } from '@angular/core';
import { Router, ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class RoutingService {
    currentRoute = new BehaviorSubject<string>('');

    constructor(
        private router: Router,
        private activeRoute: ActivatedRoute,
    ) { }

    /**
     *
     * @returns The ActivatedRouteSnapshot-Array
     */
    getFullRoute(): ActivatedRouteSnapshot {
        const url = this.router.routerState.snapshot.url;
        const parts = url.split('/');
        const strippedUrl = parts[2];
        console.log('Stripped url:', strippedUrl);

        const currentRoute = this.activeRoute.snapshot;
        return currentRoute;
    }

    /**
     *
     * @returns
     */
    getLastSegmentOfCurrentUrl(): string {
        const url = this.router.routerState.snapshot.url;
        const parts = url.split('/');                           // Split URL by '/'
        const strippedUrl = parts[1];                           // Get the second part (index 2) assuming the URL is like '/private/project'
        return strippedUrl;
    }

    getObjectFromUrl(): string {
        const strippedUrl = this.getLastSegmentOfCurrentUrl();
        const trimmedRoute = strippedUrl.split('?');
        // console.log('test:\n',trimmedRoute[0]);
        return trimmedRoute[0];
    }

    getParamsFromUrl(): string {
        const strippedUrl = this.getLastSegmentOfCurrentUrl();
        const trimmedRoute = strippedUrl.split('?');
        // console.log('test:\n', trimmedRoute[1]);
        return trimmedRoute[1];
    }
}
