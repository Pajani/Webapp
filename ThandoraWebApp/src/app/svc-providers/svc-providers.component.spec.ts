import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SvcProvidersComponent } from './svc-providers.component';

describe('SvcProvidersComponent', () => {
  let component: SvcProvidersComponent;
  let fixture: ComponentFixture<SvcProvidersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SvcProvidersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SvcProvidersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
