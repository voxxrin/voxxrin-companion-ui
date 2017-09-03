import { Injectable } from '@angular/core';

@Injectable()
export class UtilsService {

    public asyncImportScript = (oHead => {

        const loadError = (oError) => {
            throw new URIError('The script ' + oError.target.src + ' is not accessible.');
        };

        return (sSrc, fOnload) => {
            const oScript = document.createElement('script');
            oScript.type = 'text\/javascript';
            oScript.onerror = loadError;
            if (fOnload) {
                oScript.onload = fOnload;
            }
            oHead.appendChild(oScript);
            oScript.src = sSrc;
        };

    })(document.head || document.getElementsByTagName('head')[0]);
}