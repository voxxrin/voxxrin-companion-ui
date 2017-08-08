import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Location } from '../../models/location.model';

declare let google;

@Component({
    selector: 'maps',
    templateUrl: './maps.component.html'
})
export class MapsComponent implements OnInit {

    @Input() location: Location;
    @ViewChild('map') mapElement: ElementRef;
    map: any;

    ngOnInit(): void {
        this.loadMap();
    }

    loadMap() {

        let latLng = new google.maps.LatLng(this.location.latitude, this.location.longitude);

        let mapOptions = {
            center: latLng,
            zoom: 13,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };

        this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

        new google.maps.Marker({
            position: latLng,
            map: this.map
        });
    }
}