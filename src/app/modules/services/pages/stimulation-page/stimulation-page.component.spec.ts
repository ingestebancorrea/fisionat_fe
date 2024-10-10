import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StimulationPageComponent } from './stimulation-page.component';

describe('StimulationPageComponent', () => {
  let component: StimulationPageComponent;
  let fixture: ComponentFixture<StimulationPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StimulationPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StimulationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
