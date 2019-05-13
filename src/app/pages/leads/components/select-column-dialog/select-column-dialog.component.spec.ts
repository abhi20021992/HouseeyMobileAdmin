import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectColumnDialogComponent } from './select-column-dialog.component';

describe('SelectColumnDialogComponent', () => {
  let component: SelectColumnDialogComponent;
  let fixture: ComponentFixture<SelectColumnDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectColumnDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectColumnDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
