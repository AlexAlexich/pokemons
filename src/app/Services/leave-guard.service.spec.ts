/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { LeaveGuardService } from './leave-guard.service';

describe('Service: LeaveGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LeaveGuardService]
    });
  });

  it('should ...', inject([LeaveGuardService], (service: LeaveGuardService) => {
    expect(service).toBeTruthy();
  }));
});
