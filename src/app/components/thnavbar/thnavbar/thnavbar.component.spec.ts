import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThnavbarComponent } from './thnavbar.component';

describe('ThnavbarComponent', () => {
  let component: ThnavbarComponent;
  let fixture: ComponentFixture<ThnavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThnavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThnavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
