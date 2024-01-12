import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FirstTaskPage } from './first-task.page';

describe('FirstTaskPage', () => {
  let component: FirstTaskPage;
  let fixture: ComponentFixture<FirstTaskPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(FirstTaskPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
