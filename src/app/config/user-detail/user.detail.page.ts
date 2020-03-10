import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { UserService, User } from 'src/app/shared/services/user.service';

@Component({
    selector: 'user-detail',
    templateUrl: 'user.detail.page.html',
    styleUrls: ['user.detail.page.scss']
})
export class UserDetailPage implements OnInit {
    @Input() field: string;
    public fieldValue: string;
    public user: User;
    constructor(private modalController: ModalController,
                private userService: UserService) {
    }

    public ngOnInit() {
        this.user = this.userService.currentUser;
        this.fieldValue = this.user[this.field];
    }


    public async save() {
        this.user[this.field] = this.fieldValue;
        await this.userService.updateUser(this.user);
        this.close();
    }

    public close() {
        this.modalController.dismiss();
    }
}
