import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DescriptionGrassetteComponent } from './description-grassette.component';

describe('DescriptionGrassetteComponent', () => {
  let component: DescriptionGrassetteComponent;
  let fixture: ComponentFixture<DescriptionGrassetteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DescriptionGrassetteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DescriptionGrassetteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
