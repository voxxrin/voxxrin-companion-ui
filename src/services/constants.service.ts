import { Injectable } from '@angular/core';

@Injectable()
export class ConstantsService {

    constructor() {
    }

    dateFormat: string = "dd/MM/yyyy";

    hourFormat: string = "HH:mm";
}
