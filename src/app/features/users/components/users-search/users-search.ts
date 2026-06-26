import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NzInputDirective } from 'ng-zorro-antd/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UsersService } from '@core/services/users.service';
import { debounceTime, distinctUntilChanged, Subject } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-users-search',
  imports: [NzInputDirective, ReactiveFormsModule, FormsModule],
  templateUrl: './users-search.html',
  styleUrl: './users-search.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersSearch {
  readonly usersService = inject(UsersService);

  private readonly searchSubject = new Subject<string>();

  constructor() {
    this.searchSubject
      .pipe(debounceTime(300), distinctUntilChanged(), takeUntilDestroyed())
      .subscribe((query) => this.usersService.setSearch(query));
  }

  onSearch(query: string): void {
    this.searchSubject.next(query);
  }
}
