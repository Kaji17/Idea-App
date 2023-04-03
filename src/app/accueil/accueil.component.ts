import { Component, OnInit } from '@angular/core';
import { IIdea } from '../model/Idea.model';
import { IdeaListService } from '../services/idea-list.service';
import { Observable, interval } from 'rxjs';
import { switchMap } from 'rxjs/operators';


@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit {

  public Ideaies!: IIdea[];
  constructor(private ideaservice: IdeaListService) { }

  ngOnInit(): void {
    this.ideaservice.getIdea().subscribe({
      next: ideaies => {
        this.Ideaies = ideaies; //Listes de tout les pays de la V
      }
    });

    // Récupérer les items toutes les 1 secondes
    interval(1000)
    .pipe(switchMap(() =>  this.ideaservice.getIdea()))
    .subscribe(items => {
      this.Ideaies = items; //Listes de tout les pays de la 
    });
  }

  addItem(newItem: IIdea[]) {
    this.Ideaies=newItem;
  }
  load():void{
    this.ngOnInit()
  }

}
