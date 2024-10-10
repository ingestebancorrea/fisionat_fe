import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeuroPageComponent } from './neuro-page.component';

describe('NeuroPageComponent', () => {
  let component: NeuroPageComponent;
  let fixture: ComponentFixture<NeuroPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NeuroPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NeuroPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
