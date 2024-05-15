import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dars5Component } from './dars5.component';

describe('Dars5Component', () => {
  let component: Dars5Component;
  let fixture: ComponentFixture<Dars5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Dars5Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Dars5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
