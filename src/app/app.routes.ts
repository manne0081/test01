import { Routes } from '@angular/router';

// PUBLIC-COMPONENTS
// *****************
import { HomeComponent } from './modules/public/home/home.component';
import { AuthComponent } from './modules/public/auth/auth.component';
import { TestComponent } from './modules/public/test/test.component';

// PRIVATE-COMPONENTS
// ******************
import { PrivateComponent } from './modules/private/private.component';
import { DashboardComponent } from './modules/private/dashboard/dashboard.component';
import { AngularComponent } from './modules/public/angular/angular.component';
import { StructureComponent } from './modules/public/structure/structure.component';
import { ClientsComponent } from './modules/private/clients/clients.component';
import { WorkspaceComponent } from './modules/private/workspace/workspace.component';
import { TeamComponent } from './modules/private/team/team.component';
import { ProjectsComponent } from './modules/private/projects/projects.component';


export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'auth', component: AuthComponent },
    { path: 'angular', component: AngularComponent },
    { path: 'structure', component: StructureComponent },
    { path: 'test', component: TestComponent },

    { path: '', component: PrivateComponent,
        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
            { path: 'dashboard', component: DashboardComponent },
            { path: 'workspace', component: WorkspaceComponent },
            { path: 'team', component: TeamComponent },
            { path: 'clients', component: ClientsComponent },
            { path: 'projects', component: ProjectsComponent },
        ]
	  },

    { path: '**', redirectTo: 'home', pathMatch: 'full' },
];
