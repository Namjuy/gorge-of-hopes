import { Component, Output, EventEmitter, Input } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Pagination } from './model/pagination.model';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'], // Đã sửa ở đây
})
export class PaginationComponent {
  @Input() pageAttribute = new Pagination(50, 10, 0);
  @Input() pageSizeOptions = [5, 10, 25];
  @Input() hidePageSize = false;
  @Input() disabled = false;
  @Input() showPageSizeOptions = true;
  @Input() showFirstLastButtons = true;
  @Output() changePagination = new EventEmitter<Pagination>();

  constructor() {}

  handlePageEvent(e: PageEvent) {
    const pagination = new Pagination(
      this.pageAttribute.Length,
      e.pageSize,
      e.pageIndex
    );
    this.changePagination.emit(pagination);
  }

  setPageSizeOptions(setPageSizeOptionsInput: string) {
    if (setPageSizeOptionsInput) {
      this.pageSizeOptions = setPageSizeOptionsInput
        .split(',')
        .map((str) => +str);
    }
  }
}
