import { TestBed, inject } from '@angular/core/testing';

import { TipoEventoService } from './tipo-evento.service';

describe('TipoEventoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TipoEventoService]
    });
  });

  it('should be created', inject([TipoEventoService], (service: TipoEventoService) => {
    expect(service).toBeTruthy();
  }));
});
