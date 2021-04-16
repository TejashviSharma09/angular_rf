import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestrfComponent } from './testrf.component';

describe('TestrfComponent', () => {
  let component: TestrfComponent;
  let fixture: ComponentFixture<TestrfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestrfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestrfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
