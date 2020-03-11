import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { baseUrl } from '../../constants';


@Injectable()
export class UserService {
    private baseUrl: string;
    public currentUser: User;
    constructor(private http: HttpClient) {
        this.baseUrl = baseUrl;
    }

    public async setupUser(): Promise<void> {
        const response = await this.http.get<string>(`${this.baseUrl}/user`, {}).toPromise();
        this.currentUser = JSON.parse(response) as User;
        console.log(this.currentUser);
    }

    public async updateUser(user: User): Promise<void> {
        await this.http.post(`${this.baseUrl}/user`, user).toPromise();
        await this.setupUser();
    }
}

export interface User {
    profilePic: string;
    username: string;
    email: string;
    phoneNumber: string;
}
