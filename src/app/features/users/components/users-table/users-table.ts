import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NzTableModule } from 'ng-zorro-antd/table';
import { UsersService } from '@core/services/users.service';
import { DatePipe } from '@angular/common';
import { USERS_TABLE_COLUMNS } from '@features/users/constants/users-table-columns.constant';
import { NzTagComponent } from 'ng-zorro-antd/tag';
import { SentinelDirective } from '@features/users/directives/sentinel.directive';

@Component({
  selector: 'app-users-table',
  imports: [NzTableModule, DatePipe, NzTagComponent, SentinelDirective],
  templateUrl: './users-table.html',
  styleUrl: './users-table.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersTable {
  readonly usersService = inject(UsersService);
  readonly users = this.usersService.visibleUsers;

  readonly listOfColumns = USERS_TABLE_COLUMNS;
}
