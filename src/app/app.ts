import { ChangeDetectionStrategy, Component } from '@angular/core';
import { UsersPage } from '@features/users/pages/users-page/users-page';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  imports: [UsersPage],
  styleUrl: './app.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {}
