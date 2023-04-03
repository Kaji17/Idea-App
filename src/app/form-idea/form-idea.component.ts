import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { IIdea } from '../model/Idea.model';
import { IdeaListService } from '../services/idea-list.service';

@Component({
  selector: 'app-form-idea',
  templateUrl: './form-idea.component.html',
  styleUrls: ['./form-idea.component.scss']
})
export class FormIdeaComponent implements OnInit {

  idea1: IIdea = Object.create(null)
  ideas!: IIdea[]
  @Output() newIdeas = new EventEmitter<IIdea[]>()

  public ideaForm = new FormGroup({
    title: new FormControl(""),
    content: new FormControl(""),
  })
  constructor(
    public formBuilder: FormBuilder,
    public idealistservice: IdeaListService
  ) {
  }

  ngOnInit(): void {
    this.idealistservice.getIdea().subscribe({
      next: ideaies => {
        this.ideas = ideaies; //Listes de tout les pays de la V
        // this.idea1 = this.ideas
      }
    });
  }

  loadAllIdee(): void {
    this.ngOnInit
  }
  onSubmit(): void {
    this.idealistservice.addIdea(this.ideaForm.value).subscribe({
      next: idea => {
        this.ideas.push(idea)
      }
    });
    this.addNewItem(this.ideas)
    this.clear()
  }

  //Méthode de rénitialiser les champs de nos input
  clear(): void {
    this.ideaForm.reset({
      title: '',
      content: '',
      // status: 0,
    });
  }

  addNewItem(Tab: IIdea[]) {
    this.newIdeas.emit(Tab);
  }

}
