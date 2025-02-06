import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CommonService {


  constructor(private http: HttpClient,) { }

  
  // postProfilePic(imageFile: File): Observable<any> {
  //   const formData: FormData = new FormData();
  //   formData.append('file', imageFile, imageFile.name);

  //   const headers = new HttpHeaders({ 'Content-Type': 'multipart/form-data' })
  //   return this.http.post(`${environment.apiUrl}/user/profile-picture/upload`, imageFile, { headers })
  //   .pipe(
  //     catchError((error) => {
  //       return error;
  //     })
  //   );
  // }


  searchForRecipe(query:any, offset: number = 0, number: number = 9){
    const headers = new HttpHeaders ({'Content-Type':'application/json'});
    return this.http.get<any>(`${environment.apiUrl}/complexSearch?query=${query}&offset=${offset}&number=${number}&apiKey=${environment.API_KEY}`, {headers});
  }
  getRandomRecipes(){ //random recipes for featured recipe feature
    const headers = new HttpHeaders ({'Content-Type':'application/json'});
    return this.http.get<any>(`${environment.apiUrl}/random?number=${10}&apiKey=${environment.API_KEY}`, {headers});
  }
  
  getRecipeById(recipeId: number): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/${recipeId}/information?apiKey=${environment.API_KEY}`);
  }
  getSimilarRecipe(recipeId: number): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/${recipeId}/similar?apiKey=${environment.API_KEY}`);
  }
}

