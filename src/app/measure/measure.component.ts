import {Component, OnInit} from '@angular/core';
import {MoodState} from '../mood-state';
import {MoodStateService} from '../mood-state.service';

@Component({
    selector: 'app-measure',
    templateUrl: './measure.component.html',
    styleUrls: ['./measure.component.css']
})
export class MeasureComponent implements OnInit {

    constructor(moodStateService: MoodStateService) {}


    moodState: MoodState = new MoodState();

    ngOnInit() {
    }

    saveMoodState(): void {

    }

}
