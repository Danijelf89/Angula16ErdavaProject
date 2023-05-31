import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './footer/footer.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateModule, TranslateLoader, TranslateService } from '@ngx-translate/core';
import { httpLoaderFactory } from './factories/http-loader-factory';
import { loadDefaultLanguage } from './factories/app-initializer-factory';
import { InfoDialogComponent } from './dialogs/info-dialog/info-dialog.component';



@NgModule({
  declarations: [
    AppComponent,
    
    
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  providers: [ {
    provide: APP_INITIALIZER,
    useFactory: loadDefaultLanguage,
    multi: true,
    deps: [TranslateService],
  },
],
  bootstrap: [AppComponent]
})
export class AppModule { }
