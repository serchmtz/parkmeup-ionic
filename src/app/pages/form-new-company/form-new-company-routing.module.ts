import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormNewCompanyPage } from './form-new-company.page';

const routes: Routes = [
  {
    path: '',
    component: FormNewCompanyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormNewCompanyPageRoutingModule {}
