import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditausuarioComponent } from './editausuario.component';

describe('EditausuarioComponent', () => {
  let component: EditausuarioComponent;
  let fixture: ComponentFixture<EditausuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditausuarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditausuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
