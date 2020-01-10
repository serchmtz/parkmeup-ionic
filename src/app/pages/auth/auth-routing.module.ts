import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {AuthPage} from './auth.page';

const routes: Routes = [
    {
        path: '',
        component: AuthPage,
        children: [
            {path: '', redirectTo: 'companies', pathMatch: 'full'},
            {path: 'companies', loadChildren: () => import('../companies/companies.module')
             .then(m => m.CompaniesPageModule)},
            {path: 'dashboard', loadChildren: () => import('../dashboard/dashboard.module')
             .then( m => m.DashboardPageModule)},
            {
                path: 'form-new-company',
                loadChildren: () => import('../form-new-company/form-new-company.module').then( m => m.FormNewCompanyPageModule)
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class AuthPageRoutingModule {
}
