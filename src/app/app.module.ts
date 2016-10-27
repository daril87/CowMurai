import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { BusinessOppPage } from '../pages/business-opp/business-opp';
import { SuccessHistoryPage } from '../pages/success-history/success-history';
import { RegisterPage } from '../pages/register/register';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { ListPage } from '../pages/list/list';

@NgModule({
  declarations: [
    MyApp,
    HelloIonicPage,
    BusinessOppPage,
    SuccessHistoryPage,
    RegisterPage,
    ItemDetailsPage,
    ListPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HelloIonicPage,
    BusinessOppPage,
    SuccessHistoryPage,
    RegisterPage,
    ItemDetailsPage,
    ListPage
  ],
  providers: []
})
export class AppModule {}
