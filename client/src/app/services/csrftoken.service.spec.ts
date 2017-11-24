import { TestBed, inject } from '@angular/core/testing';

import { CsrftokenService } from './csrftoken.service';

describe('CsrftokenService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CsrftokenService]
    });
  });

  it('should be created', inject([CsrftokenService], (service: CsrftokenService) => {
    expect(service).toBeTruthy();
  }));
});
