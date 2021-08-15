import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http'
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { TokenInterceptorService } from './shared-services/interceptor/token-interceptor.service';
import { UrlService } from './shared-services/interceptor/url-services/url.service';
import { HomeService } from './home/home.service';
import {  HttpClientModule } from '@angular/common/http';
import { StripHtmlPipe } from './shared-services/striphtml.pipe';
import { TodoListComponent } from './todo/todo-list/todo-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    StripHtmlPipe,
    TodoListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    PaginationModule.forRoot()
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
  },
  UrlService,
  HomeService
],
  bootstrap: [AppComponent]
})
export class AppModule { }
