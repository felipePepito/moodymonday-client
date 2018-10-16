import {Component, OnInit} from '@angular/core';
import {MoodState} from '../mood-state';

@Component({
    selector: 'app-measure',
    templateUrl: './measure.component.html',
    styleUrls: ['./measure.component.css']
})
export class MeasureComponent implements OnInit {

    constructor() {}

    ngOnInit() {
    }

    moodState: MoodState = new MoodState();

}
