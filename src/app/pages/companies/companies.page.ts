import { Component, OnInit } from '@angular/core';
import { ParkingService } from 'src/app/services/parking.service';
import { Company } from 'src/app/models/remote';
import { Router } from '@angular/router';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.page.html',
  styleUrls: ['./companies.page.scss'],
})
export class CompaniesPage implements OnInit {
    companies: Company[] = [];
    constructor(private parkinService: ParkingService,
                private router: Router) { }
    ngOnInit() {
        this.parkinService.getCompaniesIBelongTo().then(companies => {
            this.companies = companies;
        });
    }
    onCreateCompany() {
        //FIXME: agregar ruta correcta
        this.router.navigate(['/auth/form-new-company']);
    }
    onCompanyClicked() {
        this.router.navigate(['/auth/dashboard']);
    }


}
