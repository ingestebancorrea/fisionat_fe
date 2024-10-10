import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TherapyPageComponent } from './therapy-page.component';

describe('TherapyPageComponent', () => {
  let component: TherapyPageComponent;
  let fixture: ComponentFixture<TherapyPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TherapyPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TherapyPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
