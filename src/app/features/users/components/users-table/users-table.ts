import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NzTableModule } from 'ng-zorro-antd/table';
import { UsersService } from '@core/services/users.service';
import { DatePipe } from '@angular/common';
import { USERS_TABLE_COLUMNS } from '@features/users/constants/users-table-columns.constant';
import { NzTagComponent } from 'ng-zorro-antd/tag';

@Component({
  selector: 'app-users-table',
  imports: [NzTableModule, DatePipe, NzTagComponent],
  templateUrl: './users-table.html',
  styleUrl: './users-table.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersTable {
  private readonly usersService = inject(UsersService);
  readonly users = this.usersService.users();

  readonly listOfColumns = USERS_TABLE_COLUMNS;
}
