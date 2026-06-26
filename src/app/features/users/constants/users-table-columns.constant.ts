import { User } from '@features/users/models/user.model';
import { ColumnItem } from '@features/users/models/column-item.model';
import { isUnder18 } from '@core/utils/filter.util';

export const USERS_TABLE_COLUMNS: ColumnItem<User>[] = [
  {
    name: 'First name',
    sortOrder: null,
    sortFn: (a: User, b: User) => a.firstName.localeCompare(b.firstName),
    sortDirections: ['ascend', 'descend', null],
    listOfFilter: [],
    filterFn: null,
  },
  {
    name: 'Last name',
    sortOrder: null,
    sortFn: (a: User, b: User) => a.lastName.localeCompare(b.lastName),
    sortDirections: ['ascend', 'descend', null],
    listOfFilter: [],
    filterFn: null,
  },
  {
    name: 'Date of birth',
    sortOrder: null,
    sortFn: (a: User, b: User) => a.dateOfBirth.getTime() - b.dateOfBirth.getTime(),
    sortDirections: ['ascend', 'descend', null],
    listOfFilter: [
      { text: '< 18 years old', value: 'under18' },
      { text: '> 18 years old', value: 'over18' },
    ],
    filterFn: (value: string, item: User) => {
      if (value === 'under18') return isUnder18(item.dateOfBirth);
      if (value === 'over18') return !isUnder18(item.dateOfBirth);
      return true;
    },
  },
  {
    name: 'Phone number',
    sortOrder: null,
    sortFn: null,
    sortDirections: [null],
    listOfFilter: [],
    filterFn: null,
  },
  {
    name: 'Active',
    sortOrder: null,
    sortFn: null,
    sortDirections: [null],
    listOfFilter: [
      { text: 'Active users', value: 'active' },
      { text: 'Non-active users', value: 'nonActive' },
    ],
    filterFn: (value: string, item: User) => {
      if (value === 'active') return item.isActive;
      else return !item.isActive;
    },
  },
];
