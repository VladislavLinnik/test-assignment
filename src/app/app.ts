import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NzInputDirective } from 'ng-zorro-antd/input';
import { FormsModule } from '@angular/forms';
import { UsersTable } from '@features/users/components/users-table/users-table';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  imports: [
    NzInputDirective,
    FormsModule,
    UsersTable,
  ],
  styleUrl: './app.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {
  value = '';
}
