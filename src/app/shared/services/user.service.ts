import { Injectable } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';
import { baseUrl } from '../../constants';


@Injectable()
export class UserService {
    private baseUrl: string;
    public currentUser: User;
    constructor(private http: HTTP) {
        this.baseUrl = baseUrl;
    }

    public async setupUser(): Promise<void> {
        const response = await this.http.get(`${this.baseUrl}/user`, {}, {});
        this.currentUser = JSON.parse(JSON.parse(response.data)) as User;
        console.log(this.currentUser);
    }

    public async updateUser(user: User): Promise<void> {
        this.http.setDataSerializer('json');
        await this.http.post(`${this.baseUrl}/user`, user, {'Content-Type': 'application/json'});
        await this.setupUser();
    }
}

export interface User {
    profilePic: string;
    username: string;
    email: string;
    phoneNumber: string;
}
