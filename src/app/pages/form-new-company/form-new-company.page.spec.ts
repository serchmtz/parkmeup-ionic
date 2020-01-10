import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FormNewCompanyPage } from './form-new-company.page';

describe('FormNewCompanyPage', () => {
  let component: FormNewCompanyPage;
  let fixture: ComponentFixture<FormNewCompanyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormNewCompanyPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FormNewCompanyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
