import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DashboardPage } from './dashboard.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { DashboardService } from './dashboard.service';
import { FilterPage } from './filter/filter.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    RouterModule.forChild([{ path: '', component: DashboardPage }])
  ],
  declarations: [DashboardPage, FilterPage],
  entryComponents: [FilterPage],
  providers: [DashboardService]
})
export class DashboardPageModule {}
