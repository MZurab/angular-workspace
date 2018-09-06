import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppMenuBlockComponent } from './app-menu-block.component';

describe('AppMenuBlockComponent', () => {
  let component: AppMenuBlockComponent;
  let fixture: ComponentFixture<AppMenuBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppMenuBlockComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppMenuBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
