import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpotifyPageComponent } from './spotify-page.component';

describe('SpotifyPageComponent', () => {
  let component: SpotifyPageComponent;
  let fixture: ComponentFixture<SpotifyPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpotifyPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpotifyPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
