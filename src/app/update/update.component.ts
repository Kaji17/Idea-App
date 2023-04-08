import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IIdea, Idea } from '../model/Idea.model';
import { IdeaListService } from '../services/idea-list.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {

  idea: IIdea = new Idea()
  id1!: number
  status!: string
  constructor(private ideaservice: IdeaListService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.id1 = id
    console.log(id);
    this.ideaservice.getIdeaById(id).subscribe((idea: IIdea) => {
      this.idea.title = idea.title!
      console.log("Le titre est: ", this.idea.title)
      this.idea.content = idea.content!
      console.log("Le contenue est: ", this.idea.content)
      if (idea.status == 0) {
        this.status = "Aprouver"
      } else {
        this.status = "Désaprouver"
      }
    });
  }

  onsubmit(): void {
    this.UpdateIdea()
    this.goToIdeaList()
  }

  UpdateIdea(): void {
    this.ideaservice.upDateIdea(this.id1, this.idea).subscribe({
      next: idea => {
        console.log("modifier", idea)
      }
    })
  }

  goToIdeaList(): void {
    this.router.navigate(['/list-idea'])
  }

  setStatus(): void {
    this.ideaservice.getIdeaById(this.id1).subscribe((idea: IIdea) => {
      if(idea.status == 1){
        this.idea.status = 0
        this.status = "Aprouver"
      }else{
        this.idea.status = 1
        this.status = "Désaprouver"
      }
    })
    this.UpdateIdea()
  }

}
