import { Component, OnInit } from '@angular/core';
import { FeedService } from '../../services/feed.service';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Tweet } from '../../models/tweet.model';

@IonicPage({
    segment: 'feed'
})
@Component({
    templateUrl: './twitter-feed.page.html'
})
export class TwitterFeedPage implements OnInit {

    tweets: Tweet[];

    constructor(private navController: NavController, private navParams: NavParams, private feedService: FeedService) { }

    ngOnInit(): void {
        this.feedService.fetchTwitterFeed(this.navParams.data.eventId).subscribe(tweets => this.tweets = tweets);
    }

    public goBackToEvent() {
        this.navController.pop();
    }
}