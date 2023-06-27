import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DestnavbarComponent } from './destnavbar.component';

describe('DestnavbarComponent', () => {
  let component: DestnavbarComponent;
  let fixture: ComponentFixture<DestnavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DestnavbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DestnavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
