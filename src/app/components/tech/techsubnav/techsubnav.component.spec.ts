import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechsubnavComponent } from './techsubnav.component';

describe('TechsubnavComponent', () => {
  let component: TechsubnavComponent;
  let fixture: ComponentFixture<TechsubnavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechsubnavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TechsubnavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
