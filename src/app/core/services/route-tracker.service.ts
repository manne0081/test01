import { Injectable } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { BehaviorSubject, filter } from 'rxjs';

@Injectable({ providedIn: 'root' })

export class RouteTrackerService {
    private currentUrlSubject = new BehaviorSubject<string>(this.router.url);
    public currentUrl$ = this.currentUrlSubject.asObservable();

    constructor(private router: Router) {
        this.router.events
        .pipe(
            filter((event): event is NavigationEnd => event instanceof NavigationEnd)
        )
        .subscribe((event) => {
            this.currentUrlSubject.next(event.urlAfterRedirects);
        });
    }

    public getCurrentUrl(): string {
        return this.currentUrlSubject.value;
    }
}
