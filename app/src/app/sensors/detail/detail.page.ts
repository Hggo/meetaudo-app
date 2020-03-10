import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Sensor } from '../sensor.service';

@Component({
    selector: 'detail',
    templateUrl: 'detail.page.html',
    styleUrls: ['detail.page.scss']
})
export class DetailPage {
    @Input() sensor: Sensor;
    constructor(private modalController: ModalController) {
    }

    public filter() {
        this.close();
    }

    public close() {
        this.modalController.dismiss();
    }
}
