/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ServerApiService } from './server-api.service';

describe('Service: ServerApi', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServerApiService]
    });
  });

  it('should ...', inject([ServerApiService], (service: ServerApiService) => {
    expect(service).toBeTruthy();
  }));
});
