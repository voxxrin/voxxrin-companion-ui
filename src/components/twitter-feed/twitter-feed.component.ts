import { Component, Input } from '@angular/core';
import { Tweet } from '../../models/tweet.model';
import { ConstantsService } from '../../services/constants.service';

@Component({
    selector: 'twitter-feed',
    templateUrl: './twitter-feed.component.html'
})
export class TwitterFeedComponent {

    @Input() tweets: Tweet[];

    constructor(public constants: ConstantsService) { }
}
