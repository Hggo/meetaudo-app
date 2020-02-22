import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DashboardService {
    private baseUrl: string;
    constructor(private http: HttpClient) {
        this.baseUrl = '/api';
    }

    public async getdata() {
        const response = await this.http.get<string>(`${this.baseUrl}/dashboard/data`, {}).toPromise();
        return JSON.parse(response);
    }
}
