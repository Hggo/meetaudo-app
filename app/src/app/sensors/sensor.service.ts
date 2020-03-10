import { Injectable } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';
import { baseUrl } from '../constants';

@Injectable()
export class SensorService {
    private baseUrl: string;
    constructor(private http: HTTP) {
        this.baseUrl = baseUrl;
    }

    public async getdata(): Promise<Sensor[]> {
        const response = await this.http.get(`${this.baseUrl}/sensors/list`, {}, {});
        return JSON.parse(JSON.parse(response.data));
    }
}

export interface Sensor {
    title: string;
}
