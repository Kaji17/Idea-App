import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IdeaListService } from '../services/idea-list.service';
import { IIdea } from '../model/Idea.model';

@Component({
  selector: 'app-form-idea-update',
  templateUrl: './form-idea-update.component.html',
  styleUrls: ['./form-idea-update.component.scss']
})
export class FormIdeaUpdateComponent implements OnInit {

  public Title!: string
  public Content!: string
  public idea1: IIdea = Object.create(null)
  public idIdea!: number

  public ideaForm = new FormGroup({
    title: new FormControl(this.Title),
    content: new FormControl(this.Content),
  })
  constructor(
    public formBuilder: FormBuilder,
    public ideaservice: IdeaListService,
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient
  ) {
    this.clear()
  }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.idIdea = id
    console.log(id);
    this.ideaservice.getIdeaById(id).subscribe((idea: IIdea)=>{
      this.Title = idea.title!
      console.log("Le titre est: ", this.Title)
      this.Content = idea.content!
      console.log("Le contenue est: ", this.Content)
    });

  }


  onUpdate(): void {
    this.ideaservice.upDateIdea(this.ideaForm.value, this.idIdea)
    console.log(this.ideaForm.value)
    this.clear()
    this. back()
  }

  back(): void {
    this.router.navigate(['/accueil']);
  }

  //Méthode de rénitialiser les champs de nos input
  clear(): void {
    this.ideaForm = this.formBuilder.group({
      title: [''],
      content: ['']
    })
  }

}
