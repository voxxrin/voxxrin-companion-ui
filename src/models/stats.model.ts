import { Event } from '../models/event.model';

export interface Statistic {
    eventId: string;
    eventName: string;	
    talksCount:	number;
    speakersCount: number;
    favoritesCount:	number;
    usersWithFavoritesCount: number;
    remindersCount: number;
    usersWithRemindersCount: number;
    topFavoritedPresentation:	Event;
    topRemindedPresentation: Event;
    ratingsCount: number;
    ratingsAvg:	number;
    topRatedPresentation: Event;
}