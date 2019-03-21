import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { TestPageComponent } from './test-page';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'test-page', component: TestPageComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);