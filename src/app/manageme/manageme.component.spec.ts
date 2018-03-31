import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagemeComponent } from './manageme.component';

describe('ManagemeComponent', () => {
  let component: ManagemeComponent;
  let fixture: ComponentFixture<ManagemeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagemeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
