import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'filter-page',
  templateUrl: 'filter.page.html',
  styleUrls: ['filter.page.scss']
})
export class FilterPage implements OnInit {
  public dateModel: {start: string, end: string};
  constructor(private modalController: ModalController,
              private dashboardService: DashboardService) {
  }

  public ngOnInit() {
    this.dateModel = {
      start: new Date().toISOString(),
      end: new Date().toISOString()
    };
  }

  public filter() {
    this.close();
  }

  public close() {
    this.modalController.dismiss();
  }
}
