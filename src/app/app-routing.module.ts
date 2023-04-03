import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { AppComponent } from './app.component';
import { IdeaDetailComponent } from './idea-detail/idea-detail.component';

@NgModule({
  imports: [RouterModule.forRoot(
    [
      { path: "accueil", component: AccueilComponent},
      { path: "idee/:id", component: IdeaDetailComponent},
      { path: "", redirectTo: "accueil", pathMatch: "full" },
      { path: "**", redirectTo: "accueil", pathMatch: "full" },

    ]
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
