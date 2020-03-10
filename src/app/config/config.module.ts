import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ConfigPage } from './config.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { Camera } from '@ionic-native/camera/ngx';
import { UserDetailPage } from './user-detail/user.detail.page';


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    RouterModule.forChild([{ path: '', component: ConfigPage }])
  ],
  declarations: [ConfigPage, UserDetailPage],
  providers: [Camera],
  entryComponents: [UserDetailPage]
})
export class ConfigPageModule {}
