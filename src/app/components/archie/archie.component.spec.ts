import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchieComponent } from './archie.component';

describe('ArchieComponent', () => {
  let component: ArchieComponent;
  let fixture: ComponentFixture<ArchieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArchieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
