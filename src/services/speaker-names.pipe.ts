import { Speaker } from '../models/speaker.model';
import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash';

@Pipe({
    name: 'speakerNames'
})
export class SpeakerNamesPipe implements PipeTransform {

    public transform(speakers: Speaker[]): any {
        return _.chain(speakers)
            .map(s => s.name)
            .join(' ')
            .value();
    }
}