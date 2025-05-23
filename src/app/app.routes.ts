import { Routes } from '@angular/router';

// PUBLIC-COMPONENTS
// *****************
import { HomeComponent } from './modules/public/home/home.component';
import { AuthComponent } from './modules/public/auth/auth.component';
import { TestComponent } from './modules/public/test/test.component';

// PRIVATE-COMPONENTS
// ******************

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },

    { path: 'home', component: HomeComponent },
    { path: 'auth', component: AuthComponent },
    { path: 'test', component: TestComponent },

    { path: '**', redirectTo: 'home', pathMatch: 'full' },
];
