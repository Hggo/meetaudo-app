import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { SensorsPage } from './sensors.page';

describe('Tab2Page', () => {
  let component: SensorsPage;
  let fixture: ComponentFixture<SensorsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SensorsPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(SensorsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
