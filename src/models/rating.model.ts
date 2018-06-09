import { RatingItem } from './rating-item.model';

export interface Rating {
    userId: string;
    presentationRef: string;
    ratingItems: RatingItem[];
    dateTime: Date;
}