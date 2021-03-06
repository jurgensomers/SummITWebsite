import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OctaneComponent } from './octane.component';

describe('OctaneComponent', () => {
  let component: OctaneComponent;
  let fixture: ComponentFixture<OctaneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OctaneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OctaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
