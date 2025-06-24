import { Injectable } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { BehaviorSubject, filter } from 'rxjs';

@Injectable({ providedIn: 'root' })

export class RouteTrackerService {
    // private currentUrlSubject = new BehaviorSubject<string>(this.router.url);
    // public currentUrl$ = this.currentUrlSubject.asObservable();

    private urlPath = new BehaviorSubject<string>('');
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
                // this.currentUrlSubject.next(event.urlAfterRedirects);

                const partUrl = event.urlAfterRedirects.split('/');
                const url = partUrl[1];

                const partPath = url.split('?');
                const path = partPath[0];

                // console.log('path: ', path);
                this.urlPath.next(path);

            });

            this.activatedRoute.queryParams.subscribe(params => {
                this.urlSearchTerm.next(params['search'] || '');
                this.urlSortTerm.next(params['sort'] || 'id-asc');      // for example: 'name-asc', 'name-desc', 'id-asc', 'id-desc'
            });
    }

    /**
     *
     * @returns
     */
    getUrlPath() {
        return this.urlPath.asObservable();
    }

    getUrlSearchTerm() {
        return this.urlSearchTerm.asObservable();
    }

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
