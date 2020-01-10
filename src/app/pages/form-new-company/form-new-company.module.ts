import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormNewCompanyPageRoutingModule } from './form-new-company-routing.module';

import { FormNewCompanyPage } from './form-new-company.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormNewCompanyPageRoutingModule
  ],
  declarations: [FormNewCompanyPage]
})
export class FormNewCompanyPageModule {}
