import { Component, OnInit } from '@angular/core';
import { FeedService } from '../../services/feed.service';
import { App, NavParams } from 'ionic-angular';
import { Tweet } from '../../models/tweet.model';
import { Event } from '../../models/event.model';
import { EventPage } from '../event/event.page';

@Component({
    templateUrl: './twitter-feed.page.html'
})
export class TwitterFeedPage implements OnInit {

    event: Event;
    tweets: Tweet[];

    constructor(private app: App, private navParams: NavParams, private feedService: FeedService) { }

    ngOnInit(): void {
        this.event = this.navParams.data.event;
        this.feedService.fetchTwitterFeed(this.event).subscribe(tweets => this.tweets = tweets);
    }

    public goBackToEvent() {
        this.app.getRootNav().pop();
    }
}