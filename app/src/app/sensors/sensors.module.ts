import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SensorsPage } from './sensors.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { SensorService } from './sensor.service';
import { DetailPage } from './detail/detail.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    RouterModule.forChild([{ path: '', component: SensorsPage }])
  ],
  declarations: [SensorsPage, DetailPage],
  providers: [SensorService],
  entryComponents: [DetailPage]
})
export class SensorsPageModule {}
