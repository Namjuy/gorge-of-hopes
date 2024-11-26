import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pagination } from '../../pagination/model/pagination.model';
import { DataGrid } from './table.model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
})
export class TableComponent implements OnInit {
  @Input() gridDataList: any;
  @Input() gridDataColumn: DataGrid[] = [];
  @Output() changePagination = new EventEmitter<Pagination>();
  // template data
  constructor() {}
  ngOnInit(): void {}

  getValue(item: any, field: string) {
    const fields = field.split('.');
    let value = item;
    for (const f of fields) {
      value = value[f];
      if (value === undefined) {
        return null;
      }
    }
    return value;
  }

  getPagination(event: Pagination) {
    this.changePagination.emit(event);
  }
}
