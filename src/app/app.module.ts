import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { PagingModule } from '../components/paging.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PagingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
