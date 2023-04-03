import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IdeaListComponent } from './idea-list/idea-list.component';
import { IdeaComponent } from './idea/idea.component';
import { IdeaDetailComponent } from './idea-detail/idea-detail.component';
import { FormIdeaComponent } from './form-idea/form-idea.component';
import { AccueilComponent } from './accueil/accueil.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { FormIdeaUpdateComponent } from './form-idea-update/form-idea-update.component';
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    IdeaListComponent,
    IdeaComponent,
    IdeaDetailComponent,
    FormIdeaComponent,
    AccueilComponent,
    FormIdeaUpdateComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
