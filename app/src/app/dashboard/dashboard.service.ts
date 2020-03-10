import { Injectable } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';
import { baseUrl } from '../constants';


@Injectable()
export class DashboardService {
    private baseUrl: string;
    constructor(private http: HTTP) {
        this.baseUrl = baseUrl;
    }

    public async getdata(): Promise<SensorData[]> {
        const response = await this.http.get(`${this.baseUrl}/dashboard/data`, {}, {});
        return JSON.parse(JSON.parse(response.data));
    }
}

export interface SensorData {
    'Average Power': string;
    'Average Power Status': string;
    'Battery Press Compressor': string;
    'Battery Press HTR %': string;
    'Battery Press HTR Status': string;
    'Battery SH': string;
    'Battery Status': string;
    'Battery Volts': string;
    'CCR Sensor 1': string;
    'CCR Sensor 2': string;
    'CCR Sensor 3': string;
    'CCR Sensor 4': string;
    'Cold Head Sensor 1 Temperature': string;
    'Cold Head Sensor Status': string;
    'Date': number;
    'ERDU Buttons': string;
    'Field Current': string;
    'He 0 %': string;
    'He 100 %': string;
    'He Alarm %': string;
    'He EIS': string;
    'He Level 1': string;
    'He Self Test': string;
    'He Status': string;
    'He Warning %': string;
    'Ibutton Serial': string;
    'Mag psiA': number;
    'Mag psiA Status': string;
    'QuhHtr Res1': string;
    'QuhHtr Res2': string;
    'Shield Sensor 1': string;
    'Shield Sensor 2': string;
    'Shield Status': string;
    'Supervisory Time': string;
    'SwtHtr Res1': string;
    'Turret Sensor 1': string;
    'Turret Sensor 2': string;
    'Turret Status': string;
}
