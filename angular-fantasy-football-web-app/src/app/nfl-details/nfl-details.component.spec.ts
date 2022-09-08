import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NflDetailsComponent } from './nfl-details.component';

describe('NflDetailsComponent', () => {
  let component: NflDetailsComponent;
  let fixture: ComponentFixture<NflDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NflDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NflDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
