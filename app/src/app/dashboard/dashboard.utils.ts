import { SensorData } from './dashboard.service';
import { Chart } from 'chart.js';

export class DashboardUtils {
    public static prepareData(dataset: SensorData[], valueKey: string, labelsKey: string, unit: string) {
        const data = dataset.filter(el => el[valueKey] !== null).map(element => element[valueKey]);
        const labels = dataset.map(element => new Date(element[labelsKey]));
        return { data, labels };
    }

    public static buildBarChart(htmlElement: HTMLElement, type: string, data: any[], labels: any[], title: string) {
        return new Chart(htmlElement, {
            type,
            data: {
                labels,
                datasets: [{
                    label: title,
                    data,
                    backgroundColor: (type === 'line') ? undefined : 'rgb(38, 194, 129)',
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
