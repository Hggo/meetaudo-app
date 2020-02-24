import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class SensorService {
    private baseUrl: string;
    constructor(private http: HttpClient) {
        this.baseUrl = '/api';
    }

    public async getdata(): Promise<Sensor[]> {
        const response = await this.http.get<string>(`${this.baseUrl}/sensors/list`, {}).toPromise();
        return JSON.parse(response);
    }
}

export interface Sensor {
    title: string;
}
