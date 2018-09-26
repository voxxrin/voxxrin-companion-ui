import { Directive, Input } from '@angular/core';

@Directive({
    selector: 'img[src]',
    host: {
        '[src]': 'checkPath(src)',
        '(error)': 'onError()'
    }
})
export class DefaultImageDirective {

    @Input() src: string;
    @Input() defaultImg: string = 'assets/img/default-avatar.png';

    public onError() {
        return this.src = this.defaultImg;
    }

    public checkPath(src) {
        return src ? src : this.defaultImg;
    }
}