import { Component, Input, OnInit } from '@angular/core';
import { IIdea } from '../model/Idea.model';
import { IdeaListService } from '../services/idea-list.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-idea',
  templateUrl: './idea.component.html',
  styleUrls: ['./idea.component.scss']
})
export class IdeaComponent implements OnInit {

  @Input()
  listIdea!: IIdea

  Ideass!: IIdea[]

  recupIeda!: IIdea

  public statusVerif!: number

  constructor(private ideaservice: IdeaListService, private router: Router) { }

  ngOnInit(): void {
    this.ideaservice.getIdeaById(this.listIdea.id!).subscribe((idea: IIdea) => {
      this.statusVerif = idea.status!
    })
  }

  goToIdeaList(): void {
    this.router.navigate(['/update-idea'])
  }
  //Méthode pour supprimer l'idée par l'id
  @Input()
  deleteIdea(): void {
    this.ideaservice.deleteIdee(this.listIdea.id!).subscribe((idea: IIdea) => {
      console.log("Supprimer", idea.id)
    })
    window.location.reload()
  }

  loadAll(): void{
    this.ideaservice.getIdea()
  }
}
