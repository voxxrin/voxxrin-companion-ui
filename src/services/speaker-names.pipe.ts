import { Speaker } from '../models/speaker.model';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'speakerNames'
})
export class SpeakerNamesPipe implements PipeTransform {

  transform(speakers: Speaker[]): any {
    return speakers.join(" - ");
  }

}