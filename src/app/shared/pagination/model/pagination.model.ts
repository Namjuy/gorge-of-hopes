export class Pagination {
  Length: number = 0;
  PageSize: number = 10;
  PageIndex: number = 1;

  constructor(length: number, pageSize: number, pageIndex: number) {
    this.Length = length;
    this.PageSize = pageSize;
    this.PageIndex = pageIndex;
  }
}
