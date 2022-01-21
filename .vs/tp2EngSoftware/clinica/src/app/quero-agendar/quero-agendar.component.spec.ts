import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QueroAgendarComponent } from './quero-agendar.component';

describe('QueroAgendarComponent', () => {
  let component: QueroAgendarComponent;
  let fixture: ComponentFixture<QueroAgendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QueroAgendarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QueroAgendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
