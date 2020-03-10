import { Component, OnInit } from '@angular/core';
import { DashboardService, SensorData } from './dashboard.service';
import { DashboardUtils } from './dashboard.utils';
import { ModalController } from '@ionic/angular';
import { FilterPage } from './filter/filter.page';


@Component({
  selector: 'dashboard',
  templateUrl: 'dashboard.page.html',
  styleUrls: ['dashboard.page.scss']
})
export class DashboardPage implements OnInit {
  private data: SensorData[];
  public bars: any;
  public chartRows: ChartRow[];
  constructor(private dashboardService: DashboardService,
              private modalController: ModalController) { }

  public async ngOnInit() {
    this.chartRows = [
      {
        cols: [
          {
            id: 'chart1',
            value: 'Battery Volts',
            field: 'Date',
            unit: '',
            title: 'Voltagem da bateria',
            type: 'bar',
          }
        ]
      }, {
        cols: [
          {
            id: 'chart2',
            value: 'Average Power',
            field: 'Date',
            unit: '',
            title: 'Potência média',
            type: 'line'
          }
        ]
      }
    ];
    this.data = await this.dashboardService.getdata();
    this.createBarCharts();
  }

  private createBarCharts() {
    this.chartRows.forEach((row) => {
      row.cols.forEach(card => {
        const nativeElement = document.getElementById(card.id);
        const chartData = DashboardUtils.prepareData(this.data, card.value, card.field, card.unit);
        DashboardUtils.buildBarChart(nativeElement, card.type, chartData.data, chartData.labels, card.title);
      });
    });
  }

  public async openFilter() {
    const modal = await this.modalController.create({
      component: FilterPage
    });
    return await modal.present();
  }
}

interface ChartRow {
  cols: {
    id: string;
    field: string;
    value: string;
    unit: string;
    title: string;
    type: string;
  }[];
}
