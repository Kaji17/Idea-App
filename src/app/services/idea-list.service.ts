import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap, catchError, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IIdea } from '../model/Idea.model';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: 'my-auth-token'
  })
};
@Injectable({
  providedIn: 'root'
})
export class IdeaListService {
  host = environment.host
  host2 = this.host + "/"




  constructor(private http: HttpClient) { }

  // Récupération de la liste des Idées
  public getIdea(): Observable<IIdea[]> {
    return this.http.get<IIdea[]>(this.host).pipe(
      catchError(this.handleError)
    )
  }

   // Récupération d'une Idées par l'ID
   public getIdeaById(id: number): Observable<IIdea> {
    return this.http.get<IIdea>(`${this.host}/${id}`, httpOptions).pipe(
      catchError(this.handleError)
    )
  }

  //Création d'une nouvelle idée
  public addIdea(idea: IIdea): Observable<IIdea> {
    return this.http.post<IIdea>(this.host, idea, httpOptions)
  }

  //Modification d'une idée
  public upDateIdea(idea: IIdea, id: number): Observable<IIdea> {
    return this.http.put<IIdea>(`${this.host}/${id}`, idea, httpOptions).pipe(
      tap(ele =>console.log("modifier avec succès",ele ))
    )
  }

  //Supprimer une idée
  public deleteIdee(id: number) {
    return this.http.delete(`${this.host}/${id}`, httpOptions).pipe(
      tap(ele =>console.log("supprimer",ele ))
    )
  }


  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
}
