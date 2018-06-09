import { Pickable } from './pickable.model';

export interface RatingItem extends Pickable {

    key: string;
    labels: { [lang: string]: string; };

}