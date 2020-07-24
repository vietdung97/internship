import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// FirestoreModule
import { AngularFireModule } from 'angularfire2';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { DemoNgZorroAntdModule} from './ng-zorro-antd.module';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { CardMovieComponent } from './components/home/card-movie/card-movie.component';
import { MovieDetailComponent } from './components/home/movie-detail/movie-detail.component';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './guard/auth.guard';
import { SignupComponent } from './components/signup/signup.component';
import { CommonLayoutModule } from './components/common-layout.module';
// import { BoldKeywordPipe } from './components/bold-keyword.pipe';
import { environment } from '../environments/environment';


registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    CardMovieComponent,
    MovieDetailComponent,
    // BoldKeywordPipe

  ],
  imports: [
    BrowserModule,
    CommonLayoutModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    DemoNgZorroAntdModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.firebaseConfig)
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
