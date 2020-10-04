import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';

const PrimaryColour = 'black';
const SecondaryColour = '#ccc';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  public isLoading = new BehaviorSubject<boolean>(false);
}

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {

  constructor(private readonly loaderService: LoaderService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.loaderService.isLoading.next(true);
    return next
      .handle(req).pipe(finalize(() => this.loaderService.isLoading.next(false)));
  }
}
