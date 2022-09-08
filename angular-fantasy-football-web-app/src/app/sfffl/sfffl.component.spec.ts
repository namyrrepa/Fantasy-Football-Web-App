import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SffflComponent } from './sfffl.component';

describe('SffflComponent', () => {
  let component: SffflComponent;
  let fixture: ComponentFixture<SffflComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SffflComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SffflComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
