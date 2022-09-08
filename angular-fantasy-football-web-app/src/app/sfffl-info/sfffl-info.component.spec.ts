import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SffflInfoComponent } from './sfffl-info.component';

describe('SffflComponent', () => {
  let component: SffflInfoComponent;
  let fixture: ComponentFixture<SffflInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SffflInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SffflInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
