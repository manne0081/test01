import { Injectable } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { BehaviorSubject, filter } from 'rxjs';

@Injectable({ providedIn: 'root' })

export class RouteTrackerService {
    private angularUrl = new BehaviorSubject<string>('');
    private urlPathQueryString = new BehaviorSubject<string>('');
    private urlPath = new BehaviorSubject<string>('');
    private urlRequestUri = new BehaviorSubject<string>('');
    private urlSearchTerm = new BehaviorSubject<string>('');
    private urlSortTerm = new BehaviorSubject<string>('');

    constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute,
    ) {
        this.router.events
            .pipe(
                filter((event): event is NavigationEnd => event instanceof NavigationEnd)
            )
            .subscribe((event) => {
                const angularUrl = event.urlAfterRedirects;
                this.angularUrl.next(angularUrl);

                const urlArray = event.urlAfterRedirects.split('/');
                const urlHost = urlArray[0];
                const urlRequestUri = urlArray[1];

                this.urlRequestUri.next(urlRequestUri);

                const urlRequestUriArray = urlRequestUri.split('?');
                const urlPath = urlRequestUriArray[0];
                const urlQueryString = urlRequestUriArray[1];

                this.urlPath.next(urlPath);
                this.urlPathQueryString.next(urlQueryString);

                // console.log(
                //     'angularUrl: ', this.angularUrl.getValue(),
                //     '\nRequestUri: ', this.urlRequestUri.getValue(),
                //     '\nPath: ', this.urlPath.getValue(),
                //     '\nQueryString: ', this.urlPathQueryString.getValue(),
                // );

            });

            this.activatedRoute.queryParams.subscribe(params => {
                this.urlSearchTerm.next(params['search'] || '');
                this.urlSortTerm.next(params['sort'] || '');      // 'sort'] || 'id-asc' => for example: 'name-asc', 'name-desc', 'id-asc', 'id-desc'
            });
    }

    getAngularUrl() {
        return this.angularUrl.asObservable();
    }

    getRequestUri() {
        return this.urlRequestUri.asObservable();
    }

    /**
     *
     * @returns
     */
    getUrlPath() {
        return this.urlPath.asObservable();
    }

    /**
     *
     * @returns
     */
    getUrlSearchTerm() {
        return this.urlSearchTerm.asObservable();
    }

    /**
     *
     * @returns
     */
    getUrlSortTerm() {
        return this.urlSortTerm.asObservable();
    }


    // Schema	        https://            scheme / protocol
    // Benutzerinfo	    user:pass@
    // Host	            www.example.com     host
    // Port	            :8080               port
    // Pfad	            /products/42        path
    // Query-String	    ?search=abc         query string
    // Fragment	        #details

    // Gesamte URL: http://localhost:4402/tasks?search=login&sort=
    // event.urlAfterRedirects: /tasks?search=login&sort=               (Path + Query String)

}
