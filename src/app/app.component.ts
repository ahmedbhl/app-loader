import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { User, UserService } from './services/user.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  /** Getb the fake users list */
  public users$: Observable<User[]>;

  constructor(private readonly userService: UserService) {
    this.refreshData();
  }

  /**Refresh the user list after any change in the url */
  refreshData() {
    this.users$ = this.userService.getUsers();
  }
}
