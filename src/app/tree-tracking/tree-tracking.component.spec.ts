import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreeTrackingComponent } from './tree-tracking.component';

describe('TreeTrackingComponent', () => {
  let component: TreeTrackingComponent;
  let fixture: ComponentFixture<TreeTrackingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TreeTrackingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TreeTrackingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
