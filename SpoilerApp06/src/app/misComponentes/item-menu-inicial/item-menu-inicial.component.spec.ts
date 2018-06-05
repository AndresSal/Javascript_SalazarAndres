import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemMenuInicialComponent } from './item-menu-inicial.component';

describe('ItemMenuInicialComponent', () => {
  let component: ItemMenuInicialComponent;
  let fixture: ComponentFixture<ItemMenuInicialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemMenuInicialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemMenuInicialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
