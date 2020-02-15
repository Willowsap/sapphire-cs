import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppContentPageComponent } from './app-content-page.component';

describe('AppContentPageComponent', () => {
  let component: AppContentPageComponent;
  let fixture: ComponentFixture<AppContentPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppContentPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppContentPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
