import { Injectable } from '@angular/core';
import { MoodState } from './mood-state';

@Injectable({
  providedIn: 'root'
})
export class MoodStateService {

  constructor() {
  }

  postMoodState(moodState: MoodState): void {

  }

}
