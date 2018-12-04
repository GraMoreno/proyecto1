import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerproductosComponent } from './verproductos.component';

describe('VerproductosComponent', () => {
  let component: VerproductosComponent;
  let fixture: ComponentFixture<VerproductosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerproductosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerproductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
