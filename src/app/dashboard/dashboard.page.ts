import { Component, OnInit, ViewChild } from '@angular/core';
import { DashboardService, SensorData } from './dashboard.service';
import { Chart } from 'chart.js';


@Component({
  selector: 'dashboard',
  templateUrl: 'dashboard.page.html',
  styleUrls: ['dashboard.page.scss']
})
export class DashboardPage implements OnInit {
  @ViewChild('barChart', {static: false}) barChart;
  private data: SensorData[];
  public bars: any;
  constructor(private dashboardService: DashboardService) {}
  public async ngOnInit() {
    this.data = await this.dashboardService.getdata();
    this.createBarChart();
  }

  private createBarChart() {
    // Battery Volts
    const field = 'Battery Volts';
    const replace = 'R';
    const data = this.data.filter(el => el[field] !== null).map(element => element[field]);
    const labels = this.data.map(element => new Date(element.Date));
    this.bars = new Chart(this.barChart.nativeElement, {
      type: 'bar',
      data: {
        labels,
        datasets: [{
          label: 'Voltagem da bateria',
          data,
          backgroundColor: 'rgb(38, 194, 129)',
          borderColor: 'rgb(38, 194, 129)',
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          xAxes: [{
            type: 'time'
          }]
        }
      }
    });
  }
}
