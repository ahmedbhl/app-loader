import { HttpClient, HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { delay, timeout } from 'rxjs/operators';


export class User {

}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  /**
   * @description Constructor
   * @param http : Http Client
   */
  constructor(
    private readonly http: HttpClient) {
  }

  /**
   * @description Get the users list
   */
  public getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`https://jsonplaceholder.typicode.com/users`);
  }
}

@Injectable()
export class DelayInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log(request);
    return next.handle(request).pipe(delay(5000));
  }
}