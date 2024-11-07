import { TestBed } from '@angular/core/testing';

import { ElectronService } from './ipc.service';

describe('IpcService', () => {
  let service: ElectronService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ElectronService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
