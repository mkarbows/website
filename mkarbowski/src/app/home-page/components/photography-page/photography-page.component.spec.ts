import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotographyPageComponent } from './photography-page.component';

describe('PhotographyPageComponent', () => {
  let component: PhotographyPageComponent;
  let fixture: ComponentFixture<PhotographyPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotographyPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotographyPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
