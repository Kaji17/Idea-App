import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { UpdateComponent } from './update/update.component';
import { IdeaListComponent } from './idea-list/idea-list.component';

@NgModule({
  imports: [RouterModule.forRoot(
    [
      { path: "create-idea", component: CreateComponent},
      { path: "update-idea/:id", component: UpdateComponent},
      { path: "list-idea", component: IdeaListComponent},
      { path: "", redirectTo: "create-idea", pathMatch: "full" },
      { path: "**", redirectTo: "create-idea", pathMatch: "full" },

    ]
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
