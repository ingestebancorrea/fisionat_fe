import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeriatricPageComponent } from './geriatric-page.component';

describe('GeriatricPageComponent', () => {
  let component: GeriatricPageComponent;
  let fixture: ComponentFixture<GeriatricPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GeriatricPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeriatricPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
