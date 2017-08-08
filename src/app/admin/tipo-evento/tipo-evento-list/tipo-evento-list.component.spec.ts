import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoEventoListComponent } from './tipo-evento-list.component';

describe('TipoEventoListComponent', () => {
  let component: TipoEventoListComponent;
  let fixture: ComponentFixture<TipoEventoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoEventoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoEventoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
