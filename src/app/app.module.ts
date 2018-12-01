
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import * as firebase from 'firebase';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { FormsModule } from '@angular/forms';
import { TimeagoModule } from 'ngx-timeago';

  // Initialize Firebase
  const config = {
    apiKey: 'AIzaSyCglaOfQqzabYesz4fddzOOk_6CxCN8lGU',
    authDomain: 'comcare-a7554.firebaseapp.com',
    databaseURL: 'https://comcare-a7554.firebaseio.com',
    projectId: 'comcare-a7554',
    storageBucket: 'comcare-a7554.appspot.com',
    messagingSenderId: '846911341478'
  };
  firebase.initializeApp(config);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    
    TimeagoModule.forRoot(),
    AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
