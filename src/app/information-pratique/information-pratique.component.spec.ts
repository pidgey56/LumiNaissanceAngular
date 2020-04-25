import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationPratiqueComponent } from './information-pratique.component';

describe('InformationPratiqueComponent', () => {
  let component: InformationPratiqueComponent;
  let fixture: ComponentFixture<InformationPratiqueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InformationPratiqueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InformationPratiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
