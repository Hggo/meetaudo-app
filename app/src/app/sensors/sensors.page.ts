import { Component, OnInit } from '@angular/core';
import { Sensor, SensorService } from './sensor.service';
import { ModalController } from '@ionic/angular';
import { DetailPage } from './detail/detail.page';

@Component({
  selector: 'sensors',
  templateUrl: 'sensors.page.html',
  styleUrls: ['sensors.page.scss']
})
export class SensorsPage implements OnInit {
  public sensors: Sensor[];
  constructor(private sensorService: SensorService,
              private modalController: ModalController) {}

  public async ngOnInit() {
    this.sensors = await this.sensorService.getdata();
  }

  public async openDetail(sensor: Sensor) {
    const modal = await this.modalController.create({
      component: DetailPage,
      componentProps: {
        sensor
      },
      swipeToClose: true
    });
    return await modal.present();
  }
}
