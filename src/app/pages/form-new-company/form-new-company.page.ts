import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-form-new-company',
  templateUrl: './form-new-company.page.html',
  styleUrls: ['./form-new-company.page.scss'],
})

export class FormNewCompanyPage implements OnInit {
  empresa;

  constructor(private alertController: AlertController) { }

  ngOnInit() {
  }

  async processForm() {
    const alert = await this.alertController.create({
      header: 'Confirmación',
      message: '¿Seguro que desea agregar la empresa?',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Si',
          handler: () => {
            console.log('Confirm Okay');
          }
        }
      ]
    });

    await alert.present();
  }

  getName() {}
}
