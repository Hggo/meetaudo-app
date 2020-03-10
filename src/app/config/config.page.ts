import { Component, OnInit } from '@angular/core';
import { UserService, User } from '../shared/services/user.service';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { DomSanitizer } from '@angular/platform-browser';
import { ModalController } from '@ionic/angular';
import { UserDetailPage } from './user-detail/user.detail.page';


@Component({
  selector: 'config',
  templateUrl: 'config.page.html',
  styleUrls: ['config.page.scss']
})
export class ConfigPage implements OnInit {
  public user: User;
  public hasProfilePicture: boolean;
  private cameraOptions: CameraOptions;
  constructor(private userService: UserService,
              public sanitizer: DomSanitizer,
              private camera: Camera,
              private modalController: ModalController) {
    this.user = this.userService.currentUser;
    this.hasProfilePicture = this.user.profilePic !== '';
    this.cameraOptions = {
      quality: 20,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      cameraDirection: this.camera.Direction.FRONT,
    };
  }

  public ngOnInit() {
  }

  public openCamera() {
    this.camera.getPicture(this.cameraOptions).then((imageData) => {
      const base64Image = 'data:image/jpeg;base64,' + imageData;
      this.user.profilePic = base64Image;
      this.save();
     });
  }

  public async openDetail(field: string) {
    const modal = await this.modalController.create({
      component: UserDetailPage,
      componentProps: {
        field
      },
      swipeToClose: true
    });
    await modal.present();
    this.user = this.userService.currentUser;
  }

  private async save() {
    await this.userService.updateUser(this.user);
  }
}
