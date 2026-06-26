import { Injectable, signal } from '@angular/core';
import { User } from '@features/users/models/user.model';
import { generateUsers } from '../utils/generate-users.util';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  readonly users = signal<User[]>(generateUsers()).asReadonly();
}
