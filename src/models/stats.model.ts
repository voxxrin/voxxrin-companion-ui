import { Presentation } from './presentation.model';

export interface Statistic {
    eventId: string;
    eventName: string;	
    talksCount:	number;
    speakersCount: number;
    favoritesCount:	number;
    usersWithFavoritesCount: number;
    remindersCount: number;
    usersWithRemindersCount: number;
    topFavoritedPresentation: Presentation;
    topRemindedPresentation: Presentation;
    topRatings: { [ratingItemKey: string]: Presentation };
    ratingsCount: number;
    ratingsAvg:	number;
    topRatedPresentation: Presentation;
}