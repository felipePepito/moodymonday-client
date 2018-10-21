import { TestBed } from '@angular/core/testing';

import { MoodStateService } from './mood-state.service';

describe('MoodStateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MoodStateService = TestBed.get(MoodStateService);
    expect(service).toBeTruthy();
  });
});
