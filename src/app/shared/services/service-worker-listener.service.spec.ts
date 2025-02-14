import { TestBed } from '@angular/core/testing';

import { ServiceWorkerListenerService } from './service-worker-listener.service';

describe('ServiceWorkerListenerService', () => {
  let service: ServiceWorkerListenerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceWorkerListenerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
