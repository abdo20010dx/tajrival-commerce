import { TestBed } from '@angular/core/testing';

import { SideLoginService } from './side-login.service';

describe('SideLoginService', () => {
  let service: SideLoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SideLoginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
