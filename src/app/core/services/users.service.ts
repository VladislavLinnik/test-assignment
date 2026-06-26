import { computed, Injectable, signal } from '@angular/core';
import { User } from '@features/users/models/user.model';
import { generateUsers } from '../utils/generate-users.util';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private RECORDS_PER_PAGE = 50;

  private readonly _users = signal<User[]>(generateUsers()).asReadonly();
  private _page = signal(1);

  readonly visibleUsers = computed(() => {
    return this._users().slice(0, this._page() * this.RECORDS_PER_PAGE);
  });

  nextPage(): void {
    this._page.update((p) => ++p);
  }
}
