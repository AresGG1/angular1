import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {User} from "../User";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = 'https://dummyjson.com/users';

  constructor(private http: HttpClient) { }

  fetchUserData(): Observable<User> {
    const userId = 1;

    return this.http.get(`${this.apiUrl}/${userId}`)
      .pipe(map((response: any) => {
        const {id, firstName, image} = response;

        return {id, firstName, image};
    }))
  }
}
