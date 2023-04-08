import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IIdea, Idea } from '../model/Idea.model';
import { IdeaListService } from '../services/idea-list.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  idea: IIdea = new Idea()
  

  constructor(private ideaservice: IdeaListService,
    private router: Router) { }

  ngOnInit(): void {
  }

  onsubmit(): void {
    // console.log("New idea:", this.idea)
    this.saveIdea()
    this.goToIdeaList()
  }

  saveIdea(): void {
    this.ideaservice.addIdea(this.idea).subscribe({
      next: idea => {
        console.log("enregistrer", idea)
        this.loadAll()
      }
    })
  }

  goToIdeaList(): void {
    this.router.navigate(['/list-idea'])
  }

  loadAll(): void{
    this.ideaservice.getIdea()
  }
}
