import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainLayoutComponent } from './shared/components/main-layout/main-layout.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PostPageComponent } from './post-page/post-page.component';
import { PostComponent } from './shared/components/post/post.component';
import { SharedModule } from './shared/shared.module';
import { ErrorPageComponent } from './error-page/error-page.component';
import { Provider } from '@angular/compiler/src/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './admin/shared/auth.interceptor';

const INTERCEPTOR_PROVIDER: Provider = {
  provide: HTTP_INTERCEPTORS,
  multi: true,
  useClass: AuthInterceptor
}

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    HomePageComponent,
    PostPageComponent,
    PostComponent,
    ErrorPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [
    INTERCEPTOR_PROVIDER
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
