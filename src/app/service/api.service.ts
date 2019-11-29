import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  
  baseUri:string = 'http://localhost:4000';
  playerApi:string = 'player';
  teamApi:string = 'team';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) { }

  // Create
  createPlayer(data): Observable<any> {
    let url = `${this.baseUri}`+this.playerApi+`/create`;
    return this.http.post(url, data)
      .pipe(
        catchError(this.errorMgmt)
      )
  }

  createTeam(data): Observable<any> {
    let url = `${this.baseUri}`+this.teamApi+`/create`;
    return this.http.post(url, data)
      .pipe(
        catchError(this.errorMgmt)
      )
  }

  // Get all players
  getPlayers() {
    return this.http.get(`${this.baseUri}/`+this.playerApi);
  }

  // Get all teams
  getTeams() {
    return this.http.get(`${this.baseUri}/`+this.teamApi);
  }

  // Get player
  getPlayer(id): Observable<any> {
    let url = `${this.baseUri}/`+this.playerApi+`/read/${id}`;
    return this.http.get(url, {headers: this.headers}).pipe(
      map((res: Response) => {
        return res || {}
      }),
      catchError(this.errorMgmt)
    )
  }

    // Get team
    getTeam(id): Observable<any> {
      let url = `${this.baseUri}`+this.teamApi+`/read/${id}`;
      return this.http.get(url, {headers: this.headers}).pipe(
        map((res: Response) => {
          return res || {}
        }),
        catchError(this.errorMgmt)
      )
    }
  
  // Update player
  updatePlayer(id, data): Observable<any> {
    let url = `${this.baseUri}`+this.playerApi+`/update/${id}`;
    return this.http.put(url, data, { headers: this.headers }).pipe(
      catchError(this.errorMgmt)
    )
  }

  // Update team
  updateTeam(id, data): Observable<any> {
    let url = `${this.baseUri}`+this.teamApi+`/update/${id}`;
    return this.http.put(url, data, { headers: this.headers }).pipe(
      catchError(this.errorMgmt)
    )
  }

  // Delete player
  deletePlayer(id): Observable<any> {
    let url = `${this.baseUri}`+this.playerApi+`/delete/${id}`;
    return this.http.delete(url, { headers: this.headers }).pipe(
      catchError(this.errorMgmt)
    )
  }
  // Delete team
  deleteTeam(id): Observable<any> {
    let url = `${this.baseUri}`+this.teamApi+`/delete/${id}`;
    return this.http.delete(url, { headers: this.headers }).pipe(
      catchError(this.errorMgmt)
    )
  }

  // Error handling 
  errorMgmt(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }

}