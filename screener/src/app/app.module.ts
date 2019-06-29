import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { GitHubControllerComponent } from './git-hub-controller/git-hub-controller.component';


@NgModule({
  declarations: [
    AppComponent,
    GitHubControllerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
