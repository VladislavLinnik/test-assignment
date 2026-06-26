import { ChangeDetectionStrategy, Component } from '@angular/core';
import { UsersTable } from '@features/users/components/users-table/users-table';
import { UsersSearch } from '@features/users/components/users-search/users-search';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  imports: [UsersTable, UsersSearch],
  styleUrl: './app.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {}
