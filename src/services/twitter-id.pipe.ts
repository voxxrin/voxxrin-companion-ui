import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'twitterId'
})
export class TwitterIdPipe implements PipeTransform {

    public transform(twitterId: string): any {
        return twitterId !== null && twitterId !== undefined ? `@${twitterId}` : '';
    }
}