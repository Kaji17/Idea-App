import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { IIdea } from '../model/Idea.model';
import { IdeaListService } from '../services/idea-list.service';

@Component({
  selector: 'app-idea-list',
  templateUrl: './idea-list.component.html',
  styleUrls: ['./idea-list.component.scss']
})
export class IdeaListComponent implements  OnInit {

  public Ideaies!: IIdea[];
  constructor(private ideaservice: IdeaListService) { }

  ngOnInit(): void {
    this.ideaservice.getIdea().subscribe({
      next: ideaies => {
        this.Ideaies = ideaies; //Listes de tout les pays de la V
      }
    })
  }

  loadAll():void{
    this.ideaservice.getIdea().subscribe({
      next: ideaies => {
        this.Ideaies = ideaies; //Listes de tout les pays de la V
      }
    })
  }

}
