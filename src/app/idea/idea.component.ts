import { Component, Input, OnInit } from '@angular/core';
import { IIdea } from '../model/Idea.model';
import { IdeaListService } from '../services/idea-list.service';

@Component({
  selector: 'app-idea',
  templateUrl: './idea.component.html',
  styleUrls: ['./idea.component.scss']
})
export class IdeaComponent implements OnInit {

  @Input()
  listIdea!: IIdea

  @Input()
  id!: number

  recupIeda!: IIdea

  public statusVerif!: number

  constructor(private ideaservice: IdeaListService) { }

  ngOnInit(): void {
    this.statusVerif =0
  }

  //Méthode pour supprimer l'idée par l'id
  deleteIdea(): void {
    // console.log("Id de l'idéé:", id)
    this.ideaservice.deleteIdee(this.listIdea.id!)
  }

  approuved(): void {
    if ( this.listIdea.status === 1 ) {
      this.listIdea.status=0
      console.log('idé', this.listIdea)
      this.ideaservice.upDateIdea(this.listIdea, this.listIdea.id!)

    } else {
      this.listIdea.status=1
      console.log('idé', this.listIdea)
      this.ideaservice.upDateIdea(this.listIdea, this.listIdea.id!)
      console.log('idé', this.listIdea)
      // this.ideaservice.getIdeaById(id).subscribe({
      //   next: idea => {
      //     this.recupIeda = {
      //       id: idea.id,
      //       title: idea.title,
      //       content: idea.content,
      //       status: 1
      //     };
      //   }
      // })
      // this.statusVerif = 1
      // this.ideaservice.upDateIdea(this.recupIeda, id)
    }
  }

  changeStatu(stat: number, id:number): void{
    this.ideaservice.getIdeaById(id).subscribe({
      next: idea => {
        console.log(idea)
        this.recupIeda = {
          // id: idea.id,
          // title: idea.title,
          // content: idea.content,
          status: stat
        };
      }
    })
    this.statusVerif = 1
    this.ideaservice.upDateIdea(this.recupIeda, id)
  }

  checkStatu(id:number): number{
    this.ideaservice.getIdeaById(id).subscribe({
      next: idea => {
        this.statusVerif=idea.status!
      }
    })
    return this.statusVerif
  }

}
