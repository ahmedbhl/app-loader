import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LoaderModule } from './loader/loader.module';
import { LoaderInterceptor } from './loader/services/loader.service';
import { DelayInterceptor } from './services/user.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    LoaderModule,
  ],
  exports: [LoaderModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true },{ provide: HTTP_INTERCEPTORS, useClass: DelayInterceptor, multi: true }]
})
export class AppModule {

}
