import {
  NzTableFilterFn,
  NzTableFilterList,
  NzTableSortFn,
  NzTableSortOrder,
} from 'ng-zorro-antd/table';

export interface ColumnItem<T> {
  name: string;
  sortOrder: NzTableSortOrder | null;
  sortFn: NzTableSortFn<T> | null;
  sortDirections: NzTableSortOrder[];
  listOfFilter: NzTableFilterList;
  filterFn: NzTableFilterFn<T> | null;
}
