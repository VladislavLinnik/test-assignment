import { Component } from '@angular/core';
import { UsersService } from '@features/users/services/users.service';
import { UsersSearch } from '@features/users/components/users-search/users-search';
import { UsersTable } from '@features/users/components/users-table/users-table';
import { NzSkeletonComponent } from 'ng-zorro-antd/skeleton';

@Component({
  selector: 'app-users-page',
  imports: [UsersSearch, UsersTable, NzSkeletonComponent],
  templateUrl: './users-page.html',
  styleUrl: './users-page.css',
  providers: [UsersService],
})
export class UsersPage {}
