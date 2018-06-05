import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeliculaRegularComponent } from './pelicula-regular.component';

describe('PeliculaRegularComponent', () => {
  let component: PeliculaRegularComponent;
  let fixture: ComponentFixture<PeliculaRegularComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeliculaRegularComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeliculaRegularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
