import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { HomePage } from './home';

@NgModule({
  declarations: [
    HomePage,
  ],
  imports: [
    IonicPageModule.forChild(HomePage),
    TranslateModule.forChild()
  ],
  exports: [
    HomePage
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomePageModule { }
