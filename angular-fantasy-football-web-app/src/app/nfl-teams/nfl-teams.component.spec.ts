import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NflTeamsComponent } from './nfl-teams.component';

describe('NflTeamsComponent', () => {
  let component: NflTeamsComponent;
  let fixture: ComponentFixture<NflTeamsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NflTeamsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NflTeamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
